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



$(document).ready(function () {
    $('#widget-point').append(
        '<div id="xyz" data-widget data-locale="en" data-mode="signup" data-type="dual"></div>'
    );
    $('#xyz').each(function () {
        var appKey = "e7y4yfajotyda8i5i9um";
        var settings = $(this).data();
        settings.app = appKey;
        settings.events = {
            signup: function (event, formValues) {
                console.log("Signup: formValues:", formValues);
                //window.location.replace('https://get.ringcaptcha.com/king-authr-login-2');
            }
        };
        settings.form = [
            {
                id: 'email',
                type: 'email',
                placeholder: 'Email',
                validations: {
                    presence: 'Email should be present',
                    format: { message: 'Invalid email' }
                }
            },
            {
                id: 'phone',
                type: 'phone',
                validations: {
                    length: { min: 5, max: 15, message: 'Invalid phone' }
                }
            }
        ];
        settings.userManagement = true;
        new RingCaptcha.Widget(this, settings.app, settings);
    });
});