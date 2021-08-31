/* ______________________________By @Enculandus______________________________ */
/* __________________________________________________________________________ */
//variables
var db;
var auth;
var profileRef;
var storage;
var ctrlVariable = 0;

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        //console.log(uid);
        //initializePage();
        // ...
        db = firebase.firestore();
        auth = firebase.auth();
        storage = firebase.storage();
        showName();
    } else {
        // User is signed out
        // ...
        location.href = "index.html";
    }
});

//document.addEventListener('DOMContentLoaded', nameControl);

async function nameControl(){
  ctrlVariable = 1;
}

async function showName() {
    let name = auth.currentUser.displayName.split(" ");
    document.getElementById("navFirstName").innerHTML = name[0];
    document.getElementById("navBarPic").src = auth.currentUser.photoURL;
}
//showName();

async function firebaseLogout() {
    firebase.auth().signOut()
        .then((ret) => {
            location.href = "index.html";
        })
        .catch((err) => {
            console.log(err);
        });
}
/* __________________________________________________________________________ */
/* __________________________________________________________________________ */

function profile_click() {
    location.href = "Profile.html";
}

function library_click() {
    location.href = "library.html";
}

function help_click() {
    location.href = "help_desk.html";
}

function griv_click() {
    location.href = "grievance.html";
}

function aca_click() {
    location.href = "academic_records.html";
}

function sports_click() {
    location.href = "sports.html";
}

function canteen_click() {
    location.href = "canteen.html";
}
