function red()
{
    location.href = "Dashboard.html";
}

function login(){
  email = document.getElementById('userEmail').value;
  password = document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      alert("logged in " + user.email + user.uid);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCwcdr5NUbYsGqLiMrCsJdfcM0t3AjMulo",
  authDomain: "erp-4d518.firebaseapp.com",
  projectId: "erp-4d518",
  storageBucket: "erp-4d518.appspot.com",
  messagingSenderId: "1021609152877",
  appId: "1:1021609152877:web:fb9ca217a451ac07beca64",
  measurementId: "G-B3KSC7WSQC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
