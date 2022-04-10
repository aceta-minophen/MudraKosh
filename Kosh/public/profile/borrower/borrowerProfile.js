


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

