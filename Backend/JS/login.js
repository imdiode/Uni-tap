function red() {
    username = document.getElementById('uname').value;
    password = document.getElementById('passw').value;
    firebase.auth().signInWithEmailAndPassword(username, password).then((userCredentials) => {
        location.href = "Dashboard.html";
    }).catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage)
    });
}