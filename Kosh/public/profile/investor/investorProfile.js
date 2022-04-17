firebase.auth().onAuthStateChanged(user => {
    if (user) {
        this.user = user;

        //username.innerHTML = user.displayName;
        UserID = firebase.auth().currentUser.uid;
        console.log(UserID);
        firebase.database().ref('users/' + UserID + '/Investment/investmentNo/').once('value', (snap) => {
            var invNo = snap.val();
            console.log(invNo);
            document.getElementById("invNo").innerHTML = invNo;
        });
    }
    else {
        console.log("User not signed in");
    }
});


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



        //TRACK YOUR INVESTMENTS
        firebase.database().ref('users/' + UserID + '/Investment/TotalInvestmentAmt/').once('value', (snap) => {
            var totInvAmt = snap.val();
            console.log(totInvAmt);
            document.getElementById("tot-inv").innerHTML = totInvAmt;
        });
        firebase.database().ref('users/' + UserID + '/Investment/LatestInvestment/').once('value', (snap) => {
            var latInvAmt = snap.val();
            console.log(latInvAmt);
            document.getElementById("lat-inv").innerHTML = latInvAmt;
        });
        firebase.database().ref('users/' + UserID + '/Investment/LatestInvestmentDate/').once('value', (snap) => {
            var latInvDate = snap.val();
            console.log(latInvDate);
            document.getElementById("lat-inv-date").innerHTML = latInvDate;
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


firebase.auth().onAuthStateChanged(user => {
    if (user) {
        this.user = user;
        //username.innerHTML = user.displayName;
        UserID = firebase.auth().currentUser.uid;
        console.log(UserID);
        firebase.database().ref('users/' + UserID + '/registration/role/').once('value', (snap) => {
            var role = snap.val();
            console.log(role);
            if (role == 'investor') {
                firebase.database().ref('users/' + UserID + '/Investment/investorID/').once('value', (snap) => {
                    var investorID = snap.val();
                    console.log(investorID);
                    if (investorID == null) {
                        firebase.database().ref('MudraKosh/investments/userNum').transaction(current_value => {
                            console.log((current_value || 0) + 1);
                            setInvestorID((current_value || 0) + 1);
                            return (current_value || 0) + 1;
                        });
                    } else {
                        console.log("Investor ID already set");
                    }
                });
            }
        });
    }
    else {
        console.log("User not signed in");
    }
});


function setInvestorID(invID) {
    firebase.database().ref('users/' + UserID + '/Investment/investorID/').set({
        investorID: invID
    });
    firebase.database().ref('MudraKosh/investments/' + invID).set({
        invAmt: 0
    });
}


firebase.auth().onAuthStateChanged(user => {
    if (user) {
        this.user = user;

        //username.innerHTML = user.displayName;
        UserID = firebase.auth().currentUser.uid;
        console.log(UserID);
        firebase.database().ref('users/' + UserID + '/Investment/TotalInvestmentAmt/').once('value', (snap) => {
            var totInvAmt = snap.val();
            console.log(totInvAmt);
            firebase.database().ref('users/' + UserID + '/Investment/investorID/investorID').once('value', (snap) => {
                var invID = snap.val();
                console.log(invID);
                firebase.database().ref('MudraKosh/investments/' + invID).set({
                    invAmt: totInvAmt
                });
                firebase.database().ref('MudraKosh/investments/' + invID + '/invAmt').once('value', (snap) => {
                    var invAmt = snap.val();
                    console.log(invAmt);
                });
            });
        });
    }
    else {
        console.log("User not signed in");
    }
});