firebase.auth().onAuthStateChanged(user => {
    if (user) {
        this.user = user;
        //username.innerHTML = user.displayName;
        UserID = firebase.auth().currentUser.uid;
        console.log(UserID);

        //HEADING
        //1. NAME


        // ABOUT
        // 1. NAME
        firebase.database().ref('users/' + UserID + '/registration/firstName').once('value', (snap) => {
            var firstName = snap.val();
            console.log(firstName);
            document.getElementById("firstNameAbt").innerHTML = firstName;
        });
        firebase.database().ref('users/' + UserID + '/registration/lastName').once('value', (snap) => {
            var lastName = snap.val();
            console.log(lastName);
            document.getElementById("lastNameAbt").innerHTML = lastName;
        });
        firebase.database().ref('users/' + UserID + '/registration/email').once('value', (snap) => {
            var email = snap.val();
            console.log(email);
            document.getElementById("emailID").innerHTML = email;
        });
        firebase.database().ref('users/' + UserID + '/registration/phoneNumber').once('value', (snap) => {
            var phoneNo = snap.val();
            console.log(phoneNo);
            document.getElementById("phoneNo").innerHTML = phoneNo;
        });
    }
    else {
        console.log("User not signed in");
    }
});

/* document
    .getElementById('registrationform')
    .addEventListener('submit', formSubmit);
function formSubmit(e) {

    e.preventDefault();
    // Get Values from the DOM



    //Show Alert Message(5)
    //document.querySelector('.alert').style.display = 'block';

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




            check();
        }
        else {
            console.log("User not signed in");
        }
    });
 */
function check() {
    var decSigned = document.getElementById('declaration');

    if (decSigned.checked == true) {
        console.log("is checked");
        var approved = "yes";
        writeUserData(UserID, approved)
    }
    else if (decSigned.checked == false) {
        console.log("not checked");
    }
}

function writeUserData(UserID, approved) {
    firebase.database().ref('users/' + UserID + '/loanApplication/').set({
        approved: approved
    })
        .then(function () {
            console.log("Document successfully written");
            document.location = "../borrower/borrowerProfile.html";
        })
        .catch(function (error) {
            console.error("Error writing the document: ", error);
        })
}