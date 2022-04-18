

/*Importing the packages we need*/
const express = require('express');
const path = require('path');
const admin = require("firebase-admin");
const cookieParser = require("cookie-parser");




let initial_path = path.join(__dirname, "public"); //Store the public folder path inside a variable

const app = express(); //creating express.js server
app.use(cookieParser());
app.use(express.static(initial_path)); //set public folder path to static path


//var key = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDYiOvkL/BrY/xx\nG+iJ9zuExrLyO88/IQI6St4+5zrPyHw5B05R+IurPBVuCEiLVLrMy9qjYtqFZxk1\nNQoQx911fiGjX1XWVK1tCevh6RF4YfB28tVUbdEmWq5dXScQzP7ClPkxNMmwQysJ\nJMbgVoYvi3Em+5tcP/0WyjkneNDrVJc1dmzT4uWtxi/d59q45afP3TmoI5alSRYK\nZ/qaI55rb1604ONPtTxEZZSYVdXChT7W8YqNyMjs75jHmDvfeibuLwNOOlqqCQEf\nE4BWQ1aJG7IjNRr8NL/XmNaVFzPPVwNzvOYpNIgLFQpyvP7c93GEaqSnRwWgforp\n/SmJnz5DAgMBAAECggEADJoKx91qpwZ42oQKNiJxq2EGaOa0CqXbEWfX5AwAQ9wm\nwXcumQupwBTIu1mJoiLKcSV5cis5+uLVyqhtWHcYIAC4+pX9JRcJfslmPnJRL3eT\nIa7DggFN12cWWAI6xifAAmtwqg+oxGI+ntxk2lJ+xte4l77YKOWac5kpIDh0keMo\noUYrfcFhPmZgJzM+s0ZDGWx55BMFvNpluFilERXiEi4wFfhoF8KS7T1hAulZ6BAZ\nndzws34wxS96mlbKp06CUdza85hNZvWssC4Bh+2UL8buZYD1kDEPgwzhqCrYiGnb\nt5rmTzuv/uOY5InGlvNcRXpPUIscqlPczIPESf6riQKBgQDy4DGlPaxQ9Ifu8k9f\nGtxWi+IuRJAM1PcpayeBbLERWRCk+/hFpgfv0LUzjSmIJo6jJQ7w5pxYMV4eMeOB\nGBr1DIxFAty23TzpfEZ8VZC/Q7NEmFaxVv+LSFi7J3mRSXwABNBNgpmbpJ/NJSwr\nPaRAZK4BjXyGNQIVi8RrHBM4WwKBgQDkPFefXO4k75QLKqR1+5W4tXJPTSKlTsUD\n/gFi8gVevYq5Txg87BrXEl5dnsYrI6yp4Pm7qwkUTDp7Uilk34YrKx2NNsRUIpS0\nJmyc0Kzx9HfDQkdcFPCSN8k230TJy2iahcj5ywl+LLbZcsNHIBGsO5El1NNRz6kk\naRmqiIW2OQKBgB6MSlJBTpIkH5DTU15f74THNVyibQfgJXJFMwPZWvAWprxJoPGJ\nr4ffVVs1jxq71sb4W0e7icCh/PeJSNcs4/8cY+wuLvqlGws3AVqUHI+iAUNIceb+\nTUgEgnyPu3+loX4THOwS2CU2cI8J9OM/bpBW2XgChr4OnsN8/+iE8HnvAoGAQ4M+\nABwDLdXYmv0ALQ5AmaTCrYaJqxCD4sxuKJCi2gWDVZF5//tvbRM36sWepQAmgRHV\njZfoVaK+4d/J8tbT300frrf2l1SrXCbJlhF8Nw4zpwSiCzD+gKIT2TFuLasHxD2y\n14Ehy7r6U5RJA28PCz2Lj/9Gizq8M9MLDpDXzLECgYB0Tydr+flXfNsed8z+RbID\nghke1GjOZXMRqBrps/UN/EFfW6uMmJs4qrxhHudRjH1KVzPxvExQGHIxCnhqGyVA\nL/DwadwnFJWe0HmQ0IclQPnu/v9q+TKpmrZUtTswu3W+FFJUHAhaAKEJmQOkfsTm\n3zNY1uZ4XPH+tztKqyMw7g==\n-----END PRIVATE KEY-----\n";
/*UNCOMMENT AUTH TOKEN BEFORE RUNNING*/

admin.initializeApp({
    credential: admin.credential.cert({
        "privateKey": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDYiOvkL/BrY/xx\nG+iJ9zuExrLyO88/IQI6St4+5zrPyHw5B05R+IurPBVuCEiLVLrMy9qjYtqFZxk1\nNQoQx911fiGjX1XWVK1tCevh6RF4YfB28tVUbdEmWq5dXScQzP7ClPkxNMmwQysJ\nJMbgVoYvi3Em+5tcP/0WyjkneNDrVJc1dmzT4uWtxi/d59q45afP3TmoI5alSRYK\nZ/qaI55rb1604ONPtTxEZZSYVdXChT7W8YqNyMjs75jHmDvfeibuLwNOOlqqCQEf\nE4BWQ1aJG7IjNRr8NL/XmNaVFzPPVwNzvOYpNIgLFQpyvP7c93GEaqSnRwWgforp\n/SmJnz5DAgMBAAECggEADJoKx91qpwZ42oQKNiJxq2EGaOa0CqXbEWfX5AwAQ9wm\nwXcumQupwBTIu1mJoiLKcSV5cis5+uLVyqhtWHcYIAC4+pX9JRcJfslmPnJRL3eT\nIa7DggFN12cWWAI6xifAAmtwqg+oxGI+ntxk2lJ+xte4l77YKOWac5kpIDh0keMo\noUYrfcFhPmZgJzM+s0ZDGWx55BMFvNpluFilERXiEi4wFfhoF8KS7T1hAulZ6BAZ\nndzws34wxS96mlbKp06CUdza85hNZvWssC4Bh+2UL8buZYD1kDEPgwzhqCrYiGnb\nt5rmTzuv/uOY5InGlvNcRXpPUIscqlPczIPESf6riQKBgQDy4DGlPaxQ9Ifu8k9f\nGtxWi+IuRJAM1PcpayeBbLERWRCk+/hFpgfv0LUzjSmIJo6jJQ7w5pxYMV4eMeOB\nGBr1DIxFAty23TzpfEZ8VZC/Q7NEmFaxVv+LSFi7J3mRSXwABNBNgpmbpJ/NJSwr\nPaRAZK4BjXyGNQIVi8RrHBM4WwKBgQDkPFefXO4k75QLKqR1+5W4tXJPTSKlTsUD\n/gFi8gVevYq5Txg87BrXEl5dnsYrI6yp4Pm7qwkUTDp7Uilk34YrKx2NNsRUIpS0\nJmyc0Kzx9HfDQkdcFPCSN8k230TJy2iahcj5ywl+LLbZcsNHIBGsO5El1NNRz6kk\naRmqiIW2OQKBgB6MSlJBTpIkH5DTU15f74THNVyibQfgJXJFMwPZWvAWprxJoPGJ\nr4ffVVs1jxq71sb4W0e7icCh/PeJSNcs4/8cY+wuLvqlGws3AVqUHI+iAUNIceb+\nTUgEgnyPu3+loX4THOwS2CU2cI8J9OM/bpBW2XgChr4OnsN8/+iE8HnvAoGAQ4M+\nABwDLdXYmv0ALQ5AmaTCrYaJqxCD4sxuKJCi2gWDVZF5//tvbRM36sWepQAmgRHV\njZfoVaK+4d/J8tbT300frrf2l1SrXCbJlhF8Nw4zpwSiCzD+gKIT2TFuLasHxD2y\n14Ehy7r6U5RJA28PCz2Lj/9Gizq8M9MLDpDXzLECgYB0Tydr+flXfNsed8z+RbID\nghke1GjOZXMRqBrps/UN/EFfW6uMmJs4qrxhHudRjH1KVzPxvExQGHIxCnhqGyVA\nL/DwadwnFJWe0HmQ0IclQPnu/v9q+TKpmrZUtTswu3W+FFJUHAhaAKEJmQOkfsTm\n3zNY1uZ4XPH+tztKqyMw7g==\n-----END PRIVATE KEY-----\n",
        "clientEmail": "firebase-adminsdk-yk866@mudrakosh-a1b1b.iam.gserviceaccount.com",
        "projectId": "mudrakosh-a1b1b",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-yk866%40mudrakosh-a1b1b.iam.gserviceaccount.com"
    }),
    apiKey: "AIzaSyB4xvaSLQFUwvMdK1DZGLIGb1pNe_R1KhA",
    authDomain: "mudrakosh-a1b1b.firebaseapp.com",
    databaseURL: "https://mudrakosh-a1b1b-default-rtdb.firebaseio.com/",
    projectId: "mudrakosh-a1b1b",
    storageBucket: "mudrakosh-a1b1b.appspot.com",
    messagingSenderId: "734939402803",
    appId: "1:734939402803:web:a5285f822deef239be4946",

    clientId: "734939402803-pit6jj4miaa74nt8c8r1buf0oqndc3qg.apps.googleusercontent.com"
});


app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));
    res.setTimeout(1);
})

app.get('/logout', (req, res) => {
    res.clearCookie('_session');
    res.redirect('/');
});

app.get('/success', checkCookie, (req, res) => {
    res.sendFile(__dirname + '/success.html');
    console.log("UID of Signed in User is"
        + req.decodedClaims.uid);
    // You will reach here only if session
    // is working Fine
});

app.get('savecookie', (req, res) => {
    const Idtoken = req.query.token;
    savecookie(Idtoken, res);
});

// Saving cookies and verify cookies
// Reference : 
//https://firebase.google.com/docs/auth/admin/manage-cookies

function savecookie(idtoken, res) {

    const expiresIn = 60 * 60 * 24 * 5 * 1000;
    admin.auth().createSessionCookie(idtoken, { expiresIn })
        .then((sessionCookie) => {
            const options = {
                maxAge: expiresIn,
                httpOnly: true, secure: true
            };

            admin.auth().verifyIdToken(idtoken)
                .then(function (decodedClaims) {
                    res.redirect('/success');
                });
        }, error => {
            res.status(401).send("UnAuthorised Request");
        });
}

function checkCookie(req, res, next) {

    const sessionCookie = req.cookies.__session || '';
    admin.auth().verifySessionCookie(
        sessionCookie, true).then((decodedClaims) => {
            req.decodedClaims = decodedClaims;
            next();
        })
        .catch(error => {

            // Session cookie is unavailable or invalid. 
            // Force user to login.
            res.redirect('/');
        });
}


/*UNCOMMENT AUTH TOKENS BEFORE RUNNING*/


const accountSid = 'AC3c89cc6a55ab81d8dbc00d545ed52937'; // Your Account SID from www.twilio.com/console
const authToken = 'ed6a187305f2a1c8c7d7b402c88747ac'; // Your Auth Token from www.twilio.com/console

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);


function otpGen() {
    admin.database().ref('otVerif/').once('value', (snap) => {
        var otp = snap.val().otp;
        var phoneNum = snap.val().phoneNo;
        //console.log(phoneNum);
        //console.log(otp);

        if (otp == null || otp == "") {
            //console.log("No OTP");
        } else {
            client.messages
                .create({
                    body: 'Your OTP for logging in to MudraKosh is: ' + otp,
                    to: '+91' + phoneNum, // Text this number
                    from: '+19896238928', // From a valid Twilio number
                })
                .then((message) => console.log(message.sid));

            admin.database().ref('otVerif/otp/').remove();
        }
    });
}

function run() {
    setInterval(otpGen, 1000);
}

run();


app.listen("8080", () => {
    console.log('listening.....');
})

