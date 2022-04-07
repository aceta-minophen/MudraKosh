var username = document.getElementById("user_Name");

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        this.user = user;

        username.innerHTML = user.displayName;
        UserID = firebase.auth().currentUser.uid;
        console.log(UserID);

    }
    else {
        console.log("User not signed in");
    }
});


document
    .getElementById('registrationform')
    .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {

    e.preventDefault();
    // Get Values from the DOM

    //SECTION A
    //A1 - Name of the applicant
    let saluApp = document.querySelector('#salutationA1').value;
    let fnameApp = document.querySelector('#firstnameA1').value;
    let mnameApp = document.querySelector('#middlenameA1').value;
    let lnameApp = document.querySelector('#lastnameA1').value;


    //A2 - Passport Size Photo UPLOAD
    let passPhoto = document.querySelector('#passport-photo-upload').value;


    //A3 - Father's/Spouse's Name
    let saluRel = document.querySelector('#salutationA1').value;
    let fnameRel = document.querySelector('#firstnameA1').value;
    let mnameRel = document.querySelector('#middlenameA1').value;
    let lnameRel = document.querySelector('#lastnameA1').value;


    //A4 - Gender
    //let 

    //Show Alert Message(5)
    document.querySelector('.alert').style.display = 'block';

    //Hide Alert Message After Seven Seconds(6)
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 7000);

    //Form Reset After Submission(7)
    document.getElementById('registrationform').reset();
}


