//loanApplication/loanApp.html


firebase.auth().onAuthStateChanged(user => {
    if (user) {
        this.user = user;
        //username.innerHTML = user.displayName;
        UserID = firebase.auth().currentUser.uid;
        console.log(UserID);
        getFileUrl("PassportSizePhoto");

        //HEADING
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
        //2. FIELD
        firebase.database().ref('users/' + UserID + '/registration/field').once('value', (snap) => {
            var field = snap.val();
            //console.log(lastName);
            document.getElementById("field").innerHTML = field;
        });


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
        firebase.database().ref('users/' + UserID + '/registration/field').once('value', (snap) => {
            var field = snap.val();
            console.log(field);
            document.getElementById("field1").innerHTML = field;
        });
        firebase.database().ref('users/' + UserID + '/loanApplication/date').once('value', (snap) => {
            var date = snap.val();
            console.log(date);
            document.getElementById("loan-app-date").innerHTML = date;
        });
        firebase.database().ref('users/' + UserID + '/loanApplication/loanAmountt').once('value', (snap) => {
            var loanAmt = snap.val();
            console.log(loanAmt);
            document.getElementById("loan-amt").innerHTML = loanAmt;
        });

        firebase.database().ref('users/' + UserID + '/loanApplication/crop').once('value', (snap) => {
            var crop = snap.val();
            console.log(crop);

            let status = document.getElementById("status");

            let loanAppBtn = document.getElementById("not-btn");

            if (crop == null) {
                document.getElementById("status").innerHTML = "Loan not applied";
                status = "Loan Not Applied";
                status.innerHTML;
                console.log(status);

            } else {
                document.getElementById("status").innerHTML = "Loan is in the process of being approved.";
                status = "Loan is in the process of being approved.";
                status.innerHTML;
                console.log(status);
                loanAppBtn.style.display = "none";
            }
        });
    }
    else {
        console.log("User not signed in");
    }
});



function getFileUrl(fileName) {
    var storage = firebase.storage().ref(`${UserID}/${fileName}`);

    storage.getDownloadURL().then(function (url) {
        console.log(url);
        document.getElementById("profile-pic").src = url;

    }).catch(function (error) {
        console.log("error encountered");
    });

}

var today = new Date();
var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
console.log(date);