var system = '';
var k = '';

var seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);

function otpInput() {
    const inputs = document.querySelectorAll('#otp > *[id]');
    for (let i = 0; i < inputs.length; i++) {
        var a = inputs[i].value;
        inputs[i].addEventListener('keydown', function (event) {
            if (event.key === "Backspace") {
                inputs[i].value = '';
                if (i !== 0) inputs[i - 1].focus();
            } else {
                if (i === inputs.length - 1 && inputs[i].value !== '') {

                    return true;
                } else if (event.keyCode > 47 && event.keyCode < 58) {
                    inputs[i].value = event.key;
                    if (i !== inputs.length - 1) inputs[i + 1].focus();
                    event.preventDefault();
                } else if (event.keyCode > 64 && event.keyCode < 91) {
                    inputs[i].value = String.fromCharCode(event.keyCode);
                    if (i !== inputs.length - 1) inputs[i + 1].focus();
                    event.preventDefault();
                }
            }
            //k = inputs[0].value + inputs[1].value + inputs[2].value + inputs[3].value;
        });
        k = inputs[0].value + inputs[1].value + inputs[2].value + inputs[3].value;
        //var a = inputs[i].value;

        //console.log(k);
        // console.log(inputs[i].value);
    }
    console.log(k);
    if (seq == k) {
        console.log("Correct pin");
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.user = user;

                //username.innerHTML = user.displayName;
                UserID = firebase.auth().currentUser.uid;
                console.log(UserID);

                firebase.database().ref('users/' + UserID + '/registration/role').once('value', (snap) => {
                    var role = snap.val();
                    console.log(role);

                    let isSigned = false;

                    if (role == null) {
                        isSigned = false;
                        window.location.href = 'registration/registration.html';

                    } else if (role == 'borrower') {
                        isSigned = true;
                        //window.location.href = '../profile/borrower/borrowerProfile.html';
                        //signInURL = 'registration/registration.html';
                        window.location.href = '../profile/borrower/borrowerProfile.html';
                    } else if (role == 'investor') {
                        isSigned = true;
                        window.location.href = '../profile/investor/investorProfile.html';
                    }

                    console.log(isSigned);
                });

                console.log(signInURL);



            }
            else {
                console.log("User not signed in");
            }
        });
    } else {
        console.log("wrong");
        var T = document.getElementById("wrong-otp");
        T.style.display = "block";

        const inputs = document.querySelectorAll('#input1, #input2, #input3, #input4');

        inputs.forEach(input => {
            input.value = '';
        });
    }
}




firebase.auth().onAuthStateChanged(user => {
    if (user) {
        this.user = user;
        //username.innerHTML = user.displayName;
        UserID = firebase.auth().currentUser.uid;
        console.log(UserID);

        firebase.database().ref('users/' + UserID + '/registration/').once('value', (snap) => {
            var phoneNo = snap.val().phoneNumber;
            var name = snap.val().firstName;
            console.log(phoneNo);
            console.log(name);

            document.getElementById("phoneNo").innerHTML = "+91" + phoneNo;

            console.log(seq);
            writeUserData(phoneNo, seq);
        });
    }
    else {
        console.log("User not signed in");
    }
});


function writeUserData(phoneNo, otp) {
    firebase.database().ref('otVerif/').set({
        phoneNo: phoneNo,
        otp: otp
    })
}