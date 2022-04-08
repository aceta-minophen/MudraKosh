var username = document.getElementById("user_Name");

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        this.user = user;

        username.innerHTML = user.displayName;
        UserID = firebase.auth().currentUser.uid;
        console.log(UserID);

    }
    else {
        console.log("User not signed in");
    }
});


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


    //A2 - Passport Size Photo UPLOAD
    //let passPhoto = document.querySelector('#passport-photo-upload').value;


    //A3 - Father's/Spouse's Name
    let saluRel = document.querySelector('#salutationA1').value;
    let fnameRel = document.querySelector('#firstnameA1').value;
    let mnameRel = document.querySelector('#middlenameA1').value;
    let lnameRel = document.querySelector('#lastnameA1').value;


    //A4 - Gender
    let gender = document.querySelector('#gender').value;

    //A5 - Marital Status
    let maritalStat = document.querySelector('#marital-status').value;

    //A6 - DOB
    let DOB = document.querySelector('#dob').value;

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
    let country1 = document.querySelector('#coutry1').value;


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
    let country2 = document.querySelector('#coutry2').value;


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






    //Show Alert Message(5)
    document.querySelector('.alert').style.display = 'block';

    //Hide Alert Message After Seven Seconds(6)
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 7000);

    //Form Reset After Submission(7)
    document.getElementById('registrationform').reset();
}
