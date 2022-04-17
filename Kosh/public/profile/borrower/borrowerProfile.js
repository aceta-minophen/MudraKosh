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
            if (date == null) {
                document.getElementById("loan-app-date").innerHTML = "-";
            } else {
                document.getElementById("loan-app-date").innerHTML = date;
            }
        });
        firebase.database().ref('users/' + UserID + '/loanApplication/loanAmountt').once('value', (snap) => {
            var loanAmt = snap.val();
            console.log(loanAmt);
            if (loanAmt == null) {
                document.getElementById("loan-amt").innerHTML = '-';
            } else {
                document.getElementById("loan-amt").innerHTML = loanAmt;
            }

        });
        firebase.database().ref('users/' + UserID + '/eKYC//MonetaryDetails/cibilScore').once('value', (snap) => {
            var cibil = snap.val();
            console.log(cibil);
            document.getElementById("cibil").innerHTML = cibil;
        });

        firebase.database().ref('users/' + UserID + '/loanApplication/approved').once('value', (snap) => {
            var approved = snap.val();
            console.log(approved);

            let status = document.getElementById("status");

            let loanAppBtn = document.getElementById("not-btn");

            if (approved == null) {
                document.getElementById("status").innerHTML = "Loan not applied";
                status = "Loan Not Applied";
                status.innerHTML;
                console.log(status);

            } else if (approved == "no") {
                document.getElementById("status").innerHTML = "Loan is in the process of being approved.";
                status = "Loan is in the process of being approved.";
                status.innerHTML;
                console.log(status);
                loanAppBtn.style.display = "none";
            } else if (approved == "yes") {
                document.getElementById("status").innerHTML = "Loan has been approved and allotted.";
                status = "Loan has been approved and allotted.";
                status.innerHTML;
                console.log(status);
                loanAppBtn.style.display = "none";
                firebase.database().ref('users/' + UserID + '/loanApplication/loanAmountt').once('value', (snap) => {
                    var loanAmt = snap.val();
                    console.log(loanAmt);
                    if (loanAmt == null) {
                        document.getElementById("first-Installment").innerHTML = '-';
                        document.getElementById("return-amt").innerHTML = '-';
                    } else {
                        document.getElementById("first-Installment").innerHTML = loanAmt * 0.2;
                        document.getElementById("return-amt").innerHTML = (loanAmt * 0.2) + (loanAmt * 0.2 * 0.075);
                    }

                });

                firebase.auth().onAuthStateChanged(user => {
                    if (user) {
                        this.user = user;
                        //username.innerHTML = user.displayName;
                        UserID = firebase.auth().currentUser.uid;
                        console.log(UserID);
                        firebase.database().ref('users/' + UserID + '/registration/role/').once('value', (snap) => {
                            var role = snap.val();
                            console.log(role);
                            if (role == 'borrower') {
                                firebase.database().ref('users/' + UserID + '/loanApplication/loanID/').once('value', (snap) => {
                                    var loanID = snap.val();
                                    console.log(loanID);
                                    if (loanID == null) {
                                        firebase.database().ref('MudraKosh/loans/loanNum').transaction(current_value => {
                                            console.log((current_value || 0) + 1);
                                            setLoanID((current_value || 0) + 1);
                                            return (current_value || 0) + 1;
                                        });
                                    } else {
                                        console.log("Loan ID already set");
                                    }
                                });
                            }
                        });
                    }
                    else {
                        console.log("User not signed in");
                    }
                });
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

date1 = today.getDate() + '-' + (today.getMonth() + 1) + '-' + (today.getFullYear() + 1);


document.getElementById("approval-date").innerHTML = date;

document.getElementById("return-id").innerHTML = date1;


function setLoanID(loanID) {
    firebase.database().ref('users/' + UserID + '/loanApplication/loanID/').set({
        loanID: loanID
    });
    firebase.database().ref('MudraKosh/loans/' + loanID).set({
        loans: 0
    });
}


firebase.auth().onAuthStateChanged(user => {
    if (user) {
        this.user = user;

        //username.innerHTML = user.displayName;
        UserID = firebase.auth().currentUser.uid;
        console.log(UserID);
        firebase.database().ref('users/' + UserID + '/loanApplication/loanAmountt/').once('value', (snap) => {
            var loanAmt = snap.val();
            console.log(loanAmt);
            firebase.database().ref('users/' + UserID + '/loanApplication/loanID/loanID').once('value', (snap) => {
                var loanID = snap.val();
                console.log(loanID);
                if (loanID > 0) {
                    firebase.database().ref('MudraKosh/loans/' + loanID).set({
                        loanAmt: loanAmt
                    });
                    firebase.database().ref('MudraKosh/loans/' + loanID + '/loanAmt').once('value', (snap) => {
                        var loanAmt = snap.val();
                        console.log(loanAmt);
                    });
                }
            });
        });
    }
    else {
        console.log("User not signed in");
    }
});