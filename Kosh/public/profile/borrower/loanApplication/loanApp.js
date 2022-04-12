firebase.auth().onAuthStateChanged(user => {
    if (user) {
        this.user = user;
        //username.innerHTML = user.displayName;
        UserID = firebase.auth().currentUser.uid;
        console.log(UserID);

        //HEADING
        //1. NAME
        //1. NAME
        firebase.database().ref('users/' + UserID + '/registration/firstName').once('value', (snap) => {
            var firstName = snap.val();
            console.log(firstName);
            document.getElementById("firstName").innerHTML = firstName;
        });
        firebase.database().ref('users/' + UserID + '/registration/lastName').once('value', (snap) => {
            var lastName = snap.val();
            console.log(lastName);
            document.getElementById("lastName").innerHTML = lastName;
        });

        firebase.database().ref('users/' + UserID + '/eKYC/AddressDetails/address1').once('value', (snap) => {
            var address = snap.val();
            console.log(address);
            document.getElementById("address").innerHTML = address;
        });

        firebase.database().ref('users/' + UserID + '/registration/field').once('value', (snap) => {
            var field = snap.val();
            //console.log(lastName);
            document.getElementById("field").innerHTML = field;
        });
    }
    else {
        console.log("User not signed in");
    }
});



const submitButton = document.getElementById("submitBtn");

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        this.user = user;

        //username.innerHTML = user.displayName;
        UserID = firebase.auth().currentUser.uid;
        console.log(UserID);


    }
    else {
        console.log("User not signed in");
    }
});

var flip = 0;

//listen for submit event//(1)
document
    .getElementById('registrationform')
    .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {

    e.preventDefault();
    // Get Values from the DOM
    let loanAmt = document.querySelector('#loan-amt').value;
    let crop = document.querySelector('#crop').value;
    let desc = document.querySelector('#loan-use').value;
    let panchOffSal = document.querySelector('#salutation').value;
    let panchOffName = document.querySelector('#name').value;
    let phoneNum = document.querySelector('#phone_number').value;
    let email = document.querySelector('#email').value;
    let decSigned = document.getElementById('declaration');



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

            //username.innerHTML = user.displayName;
            UserID = firebase.auth().currentUser.uid;
            console.log(UserID);

            var today = new Date();
            var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();


            writeUserData(UserID, loanAmt, crop, desc, panchOffName, email, phoneNum, panchOffSal, date, decSigned.checked);
        }
        else {
            console.log("User not signed in");
        }
    });
}


function writeUserData(UserID, loanAmt, crop, desc, panchOffName, email, phoneNum, panchOffSal, date, declaration) {
    firebase.database().ref('users/' + UserID + '/loanApplication/').set({
        loanAmountt: loanAmt,
        crop: crop,
        description: desc,
        panchOffName: panchOffName,
        email: email,
        phoneNumber: phoneNum,
        panchOffSal: panchOffSal,
        date: date,
        declaration: declaration
    })
        .then(function () {
            console.log("Document successfully written");
            document.location = "../borrowerProfile.html";
        })
        .catch(function (error) {
            console.error("Error writing the document: ", error);
        })
}

function check() {
    var decSigned = document.getElementById('declaration');

    if (decSigned.checked == true) {
        console.log("is checked");
    }
    else if (decSigned.checked == false) {
        console.log("not checked");
    }
}