/* ______________________________By @Enculandus______________________________ */
/* __________________________________________________________________________ */
//variables
var db;
var auth;
var profileRef;
var storage;

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

    } else {
        // User is signed out
        // ...
        location.href = "index.html";
    }
});

async function showName() {
    let name = auth.currentUser.displayName.split(" ");
    document.getElementById("navFirstName").innerHTML = name[0];
}

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
showName();