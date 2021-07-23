const preloader = document.querySelector('.loader');

/* window.addEventListener('load', function() {
    setInterval(() => {
        if (!preloader.style.opacity) {
            preloader.style.opacity = 1;
        }
        if (preloader.style.opacity > 0) {
            preloader.style.opacity -= 0.1;
        } else {
            preloader.style.display = 'none';
        }
    }, 200);
}); */

document.getElementById('login-btn').addEventListener('touchend', function() {
    preloader.style.display = 'flex';
    preloader.style.opacity += 1;
    red();
}, false);

document.getElementById('passw').addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.key === 'Enter') {
        // Cancel the default action, if needed
        event.preventDefault();
        preloader.style.display = 'flex';
        preloader.style.opacity += 1;
        // Trigger the button element with a click
        red();
    }
    //console.log(`Key "${event.key}" pressed  [event: keydown]`);
});

//to check if login is already present.
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        location.href = "Dashboard.html";
        //console.log(uid);
        //loadProfile();
        // ...
    }
});

function red() {
    username = document.getElementById('uname').value;
    password = document.getElementById('passw').value;
    firebase.auth().signInWithEmailAndPassword(username, password).then((userCredentials) => {
        //location.href = "Dashboard.html";
    }).catch((error) => {
        preloader.style.opacity -= 1;
        preloader.style.display = 'none';
        var errorCode = error.code;
        console.log(errorCode);

        if (errorCode == "auth/wrong-password") {
            document.getElementById('ErrorSin').innerHTML = "Incorrect Password!";
        } else if (errorCode == "auth/user-not-found") {
            document.getElementById('ErrorSin').innerHTML = "Incorrect Email!";
        } else if (errorCode != null) {
            document.getElementById('ErrorSin').innerHTML = "Something went wrong!";
        }

    });
}

function rec() {
    username = document.getElementById('uname').value;

    firebase.auth().sendPasswordResetEmail(username).then(function() {
        document.getElementById('ErrorSin').innerHTML = "Email sent!"
        document.getElementById('ErrorSin').style.backgroundColor = "rgb(235, 255, 234)";
        document.getElementById('ErrorSin').style.color = "#3cff35"
    });
}