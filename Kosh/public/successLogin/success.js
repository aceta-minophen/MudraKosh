var username = document.getElementById("user_Name");
/*if (username == null) {
    console.log("null");
}
else {
    username.innerHTML = username;
    console.log(username);
}
*/

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        this.user = user;

        username.innerHTML = user.displayName;
    }
    else {
        console.log("abc")
    }
});

//var username = document.getElementById("user_Name").innerHTML;

/*firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var uid = user.uid;
        username = uid;
    } else {
        username = 11;
    }
});

const user = firebase.auth().currentUser;

if (user) {
    username = user;
} else {
    username = "null";
}*/


firebase.auth().onAuthStateChanged(user => {
    if (user) {
        username = user.uid;
    }

    //console.log(user.uid) console.log(user.email)}
});