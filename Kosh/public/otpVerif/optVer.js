var system = [];
var k = '';

var app = new Vue({
    el: '#app',
    methods: {
        inputenter(id) {

            const inputs = document.querySelectorAll('#otp > *[id]');
            for (let i = 0; i < inputs.length; i++) {
                var a = '';
                inputs[i].addEventListener('keydown', function (event) {
                    if (event.key === "Backspace") {
                        inputs[i].value = '';
                        if (i !== 0) inputs[i - 1].focus();
                    } else {
                        if (i === inputs.length - 1 && inputs[i].value !== '') {
                            a = inputs[i].value;
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
                });
                //var a = inputs[i].value;
                k = a + " ";
                console.log(k);
                // console.log(inputs[i].value);
            }
            /* let otp = inputs.toString();
            console.log(otp); */
        }

    }

});

console.log(k);

var appKey = "e7y4yfajotyda8i5i9um";


firebase.auth().onAuthStateChanged(user => {
    if (user) {
        this.user = user;
        //username.innerHTML = user.displayName;
        UserID = firebase.auth().currentUser.uid;
        console.log(UserID);

        firebase.database().ref('users/' + UserID + '/registration/phoneNumber').once('value', (snap) => {
            var phoneNo = snap.val();
            console.log(phoneNo);
            /* var widget = new RingCaptcha.Widget('#xyz', {
                app: appKey,
                events: {
                    ready: function () {
                        $(this).find('.phone-input').val(phoneNo);
                    },
                    signup: function () {
                        console.log("signed in");
                    }
                }
            }).setup() */
        });
    }
    else {
        console.log("User not signed in");
    }
});



var seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
console.log(seq);