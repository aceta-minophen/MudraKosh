/*const preObject = document.getElementById('object');

var ref = firebase.database().ref();
ref.on("value", function (snapshot) {
    preObject.innerHTML = JSON.stringify(snapshot.val(), null, 3);
});

var fName = document.getElementById('fname').value;
var lName = document.getElementById('lname').value;

function submit() {
    let newref = ref.push();
    newref.set({
        users: {
            user1: {
                FirstName: fName,
                LastName: lName
            }
        }
    });
}




var userInfo = firebase.database().ref("user1/");*/

/*function submit() {
    userInfo.update({
        "FirstName": fName,
        "LastName": lName
    });
}*/


var username = document.getElementById("user_Name");



firebase.auth().onAuthStateChanged(user => {
    if (user) {
        this.user = user;

        username.innerHTML = user.displayName;
        UserID = user.uid;
        console.log(UserID);

    }
    else {
        console.log("abc");
    }
});

const user = firebase.auth().currentUser;
console.log(user.uid);


let formMessage = firebase.database().ref('register/' + user.uid);

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

    //send message values
    sendMessage(salu, fname, mname, lname, email, phoneNum, field, role);

    //Show Alert Message(5)
    document.querySelector('.alert').style.display = 'block';

    //Hide Alert Message After Seven Seconds(6)
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 7000);

    //Form Reset After Submission(7)
    document.getElementById('registrationform').reset();
}

//Send Message to Firebase(4)

function sendMessage(salu, fname, mname, lname, email, phoneNum, field, role) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
        salutation: salu,
        firstName: fname,
        middlename: mname,
        lastName: lname,
        email: email,
        phoneNumber: phoneNum,
        field: field,
        role: role
    });
}

