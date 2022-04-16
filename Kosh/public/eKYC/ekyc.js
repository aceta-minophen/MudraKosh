var username = document.getElementById("user_Name");

let dateOfBirth = document.getElementById("dob");


dateOfBirth.addEventListener('input', updateValue);



function updateValue(e) {
    console.log(e.target.value);

    const a = new Date(dateOfBirth.value).getFullYear();
    const current = new Date();
    const currYear = current.getFullYear();
    console.log(a);
    console.log(currYear);

    const age = currYear - a;
    console.log(age);

}




/* firebase.auth().onAuthStateChanged(user => {
    if (user) {
        this.user = user;

        username.innerHTML = user.displayName;
        UserID = firebase.auth().currentUser.uid;
        console.log(UserID);
        getFileUrl("Signature");
        getFileUrl("PermAdd1");



    }
    else {
        console.log("User not signed in");
    }
});
 */

document
    .getElementById('registrationform')
    .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {

    e.preventDefault();
    // Get Values from the DOM

    //SECTION A
    //A1 - Name of the applicant
    let saluApp = document.querySelector('#salutationA1').value;
    let fnameApp = document.querySelector('#firstnameA1').value;
    let mnameApp = document.querySelector('#middlenameA1').value;
    let lnameApp = document.querySelector('#lastnameA1').value;
    let applicantName = saluApp + " " + fnameApp + " " + mnameApp + " " + lnameApp;


    //A2 - Passport Size Photo UPLOAD
    //let passPhoto = document.querySelector('#passport-photo-upload').value;


    //A3 - Father's/Spouse's Name
    let saluRel = document.querySelector('#salutationA1').value;
    let fnameRel = document.querySelector('#firstnameA1').value;
    let mnameRel = document.querySelector('#middlenameA1').value;
    let lnameRel = document.querySelector('#lastnameA1').value;
    let relativeName = saluRel + " " + fnameRel + " " + mnameRel + " " + lnameRel;

    //A4 - Gender
    let gender = document.querySelector('#gender').value;

    //A5 - Marital Status
    let maritalStat = document.querySelector('#marital-status').value;

    //A6 - DOB
    let DOB = document.querySelector('#dob').value;
    let dateOfBirth = document.getElementById("dob");
    const a = new Date(dateOfBirth.value).getFullYear();
    const current = new Date();
    const currYear = current.getFullYear();
    console.log(a);
    console.log(currYear);
    let age = currYear - a;
    console.log(age);


    //A7 - Nationality
    let nationality = document.querySelector('#country').value;

    //A8 - Status
    let status = document.querySelector('#status').value;

    //A9 - Proof of Identity
    let proofOfIdentity = document.querySelector('#proof-of-identity').value;

    //A10 - Proof of identity UPLOAD

    //SECTION B
    //B1 - Address 1
    let street1 = document.querySelector('#Street1').value;
    let city1 = document.querySelector('#inputCity1').value;
    let state1 = document.querySelector('#inputState1').value;
    let zip1 = document.querySelector('#inputZip1').value;
    let country1 = document.querySelector('#country1').value;
    let address1 = street1 + ", " + city1 + ", " + state1 + ", " + country1 + ", " + zip1;


    //B2 - Contact Details
    let email = document.querySelector('#email').value;
    let phoneNo = document.querySelector('#phone_number').value;

    //B3 - Proof of Address 1

    //B4 - Proof of Address 1 UPLOAD 1

    //B5 - Proof of Address 1 UPLOAD 2

    //B6 - Address 2
    let street2 = document.querySelector('#Street2').value;
    let city2 = document.querySelector('#inputCity2').value;
    let state2 = document.querySelector('#inputState2').value;
    let zip2 = document.querySelector('#inputZip2').value;
    let country2 = document.querySelector('#country2').value;
    let address2 = street2 + ", " + city2 + ", " + state2 + ", " + country2 + ", " + zip2;


    //B3 - Proof of Address 2

    //B4 - Proof of Address 2 UPLOAD 1

    //B5 - Proof of Address 2 UPLOAD 2


    //SECTION C
    //C1 - Name of Applicant 
    let fname = document.querySelector('#firstname').value;
    let lname = document.querySelector('#lastname').value;

    //C2 - Signature of Apllicant


    //C3 - Date of Signature
    let dateSigned = document.querySelector('#datePicker').value;


    //DECLARATION SIGNED
    let isSigned = false;

    if (fname == "" && lname == "") {
        isSigned = false;
    } else {
        isSigned = true;
    }

    console.log(isSigned);




    //Show Alert Message(5)
    document.querySelector('.alert').style.display = 'block';

    //Hide Alert Message After Seven Seconds(6)
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 7000);

    //Form Reset After Submission(7)
    document.getElementById('registrationform').reset();


    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            this.user = user;
            username.innerHTML = user.displayName;
            UserID = firebase.auth().currentUser.uid;
            console.log(UserID);
            ekycWriteToDB(UserID, applicantName, relativeName, gender, maritalStat, DOB, age, nationality, status, proofOfIdentity, address1, email, phoneNo, address2, isSigned, dateSigned);
            getFileUrl("Signature");
            getFileUrl("PermAdd1");
            getFileUrl("AddressProof1");
            getFileUrl("AddressProof2");
            getFileUrl("PassportSizePhoto");
            getFileUrl("ProofOfIdentity");

            //AddressProofSelect(UserID);






        }
        else {
            console.log("User not signed in");
        }
    });
}


function ekycWriteToDB(userId, applicantName, relativeName, gender, maritalStat, DOB, age, nationality, status, proofOfIdentity, address1, email, phoneNo, address2, isSigned, dateSigned) {
    firebase.database().ref('users/' + userId + '/eKYC/IdentityDetails/').set({
        Name: applicantName,
        Relative: relativeName,
        gender: gender,
        maritalStatus: maritalStat,
        dob: DOB,
        age: age,
        nationality: nationality,
        residentialStat: status,
        proofOfIdentity: proofOfIdentity
    });

    firebase.database().ref('users/' + userId + '/eKYC/AddressDetails/').set({
        address1: address1,
        email: email,
        phone: phoneNo,
        address2: address2
    });

    firebase.database().ref('users/' + userId + '/eKYC/Declaration/').set({
        isSigned: isSigned,
        dateSigned: dateSigned
    })
        .then(function () {
            console.log("Document successfully written");
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    this.user = user;

                    username.innerHTML = user.displayName;
                    UserID = firebase.auth().currentUser.uid;
                    console.log(UserID);
                    firebase.database().ref('users/' + UserID + '/registration/role').once('value', (snap) => {
                        var redirect = snap.val();
                        console.log(redirect);

                        if (redirect == "investor") {
                            document.location = "../otpVerif/otpVer.html";
                        }
                        else if (redirect == "borrower") {
                            document.location = "../otpVerif/otpVer.html";
                        }
                    });
                }
                else {
                    console.log("User not signed in");
                }
            });

        })
        .catch(function (error) {
            console.error("Error writing the document: ", error);
        })
}


function getFileUrl(fileName) {
    var storage = firebase.storage().ref(`${UserID}/${fileName}`);

    storage.getDownloadURL().then(function (url) {
        console.log(url);
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.user = user;

                username.innerHTML = user.displayName;
                UserID = firebase.auth().currentUser.uid;
                console.log(UserID);
                firebase.database().ref('users/' + UserID + '/eKYC/AddressDetails/' + fileName).set({
                    url: url
                });




            }
            else {
                console.log("User not signed in");
            }
        });

    }).catch(function (error) {
        console.log("error encountered");
    });

}