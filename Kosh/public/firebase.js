var config = {
    apiKey: "AIzaSyB4xvaSLQFUwvMdK1DZGLIGb1pNe_R1KhA",
    /*authDomain: "mudrakosh-a1b1b.firebaseapp.com",*/
    authDomain: "localhost",
    databaseURL: "https://mudrakosh-a1b1b-default-rtdb.firebaseio.com/",
    projectId: "mudrakosh-a1b1b",
    storageBucket: "mudrakosh-a1b1b.appspot.com",
    messagingSenderId: "734939402803",
    appId: "1:734939402803:web:a5285f822deef239be4946"
};


firebase.initializeApp(config);
firebase.auth().setPersistence(
    firebase.auth.Auth.Persistence.NONE);


// FirebaseUI config.
var uiConfig = {
    signInOptions: [
        // Google sign in option
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],

    // Terms of service url/callback.
    tosUrl: '<your-tos-url>',

    // Privacy policy url/callback.
    privacyPolicyUrl: function () {
        window.location.assign(
            '<your-privacy-policy-url>');
    },

    callbacks: {
        signInSuccess: function (user,
            credential, redirectUrl) {

            // User successfully signed in.
            user.getIdToken().then(function (idToken) {
                window.location.href =
                    '/savecookie?idToken=' + idToken;
            }).catch(error => {
                console.log(error);
            });
        }
    }
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);