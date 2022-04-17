let invAmt = document.getElementById("invest-amt");

let amtBtn = document.getElementById("amt");

invAmt.addEventListener('input', updateValue);

function updateValue(e) {
    amtBtn.textContent = e.target.value;
}





/* firebase.auth().onAuthStateChanged(user => {
    if (user) {
        this.user = user;

        //username.innerHTML = user.displayName;
        UserID = firebase.auth().currentUser.uid;
        console.log(UserID);
        var investmentNo = 1;
        firebase.database().ref('users/' + UserID + '/Investment/' + investmentNo).once('value', (snap) => {
            var invNo = snap.val();
            console.log(invNo);
        });

    }
    else {
        console.log("User not signed in");
    }
}); */

var flip = 0;

//listen for submit event//(1)
document
    .getElementById('registrationform')
    .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {

    e.preventDefault();
    // Get Values from the DOM
    let invAmtStr = document.querySelector('#invest-amt').value;
    let cardNum = document.querySelector('#card-no').value;
    let expiry = document.querySelector('#expiry').value;
    let cvv = document.querySelector('#cvv').value;

    let invAmt = parseInt(invAmtStr);

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

            /* var investmentNo = 0

            firebase.database().ref('users/' + UserID + '/Investment/' + investmentNo).once('value', (snap) => {
                var invNo = snap.val();
                if (invNo == null) {
                    investmentNo = 1;
                    writeUserData(UserID, invAmt, cardNum, expiry, cvv, date, investmentNo);
                } else {
                    investmentNo = invNo + 1;
                    writeUserData(UserID, invAmt, cardNum, expiry, cvv, date, investmentNo);
                }
            }); */
            writeUserData(UserID, invAmt, cardNum, expiry, cvv, date);
        }
        else {
            console.log("User not signed in");
        }
    });
}


function writeUserData(UserID, invAmt, cardNum, expiry, cvv, date) {
    firebase.database().ref('users/' + UserID + '/Investment/').push().set({
        investmentAmount: invAmt,
        cardNum: cardNum,
        expiry: expiry,
        cvv: cvv,
        date: date
    });
    firebase.database().ref('users/' + UserID + '/Investment/investmentNo/').transaction((current_value) => {
        console.log((current_value || 0) + 1);
        return (current_value || 0) + 1;
    });
    firebase.database().ref('users/' + UserID + '/Investment/TotalInvestmentAmt/').transaction((current_value) => {
        console.log((current_value || 0) + invAmt);
        return (current_value || 0) + invAmt;
    });
    firebase.database().ref('users/' + UserID + '/Investment/LatestInvestment/').transaction((current_value) => {
        console.log(invAmt);
        return invAmt;
    });
    firebase.database().ref('users/' + UserID + '/Investment/LatestInvestmentDate/').transaction((current_value) => {
        console.log(date);
        return date;
    })
        .then(function () {
            console.log("Document successfully written");
            document.location = "../investorProfile.html";
        })
        .catch(function (error) {
            console.error("Error writing the document: ", error);
        })
}
