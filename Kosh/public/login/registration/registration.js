const submitButton = document.getElementById("submitBtn");

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        this.user = user;

        //username.innerHTML = user.displayName;
        UserID = firebase.auth().currentUser.uid;
        console.log(UserID);


    }
    else {
        console.log("User not signed in");
    }
});

var flip = 0;

//listen for submit event//(1)
document
    .getElementById('registrationform')
    .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {

    e.preventDefault();
    // Get Values from the DOM
    let salu = document.querySelector('#salutation').value;
    let fname = document.querySelector('#firstname').value;
    let mname = document.querySelector('#middlename').value;
    let lname = document.querySelector('#lastname').value;
    let email = document.querySelector('#email').value;
    let phoneNum = document.querySelector('#phone_number').value;
    let field = document.querySelector('#field').value;
    let role = document.querySelector('#role').value;

    //Show Alert Message(5)
    document.querySelector('.alert').style.display = 'block';

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
            writeUserData(UserID, salu, fname, mname, lname, email, phoneNum, field, role);


        }
        else {
            console.log("User not signed in");
        }
    });
}

var UserID;


function writeUserData(userId, salu, fname, mname, lname, email, phoneNum, field, role) {
    firebase.database().ref('users/' + userId + '/registration/').set({
        salutation: salu,
        firstName: fname,
        middlename: mname,
        lastName: lname,
        email: email,
        phoneNumber: phoneNum,
        field: field,
        role: role
    })
        .then(function () {
            console.log("Document successfully written");
            document.location = "../../eKYC/ekyc.html";
        })
        .catch(function (error) {
            console.error("Error writing the document: ", error);
        })
}