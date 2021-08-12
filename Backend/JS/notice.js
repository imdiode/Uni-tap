/* ______________________________By @Enculandus______________________________ */
/* __________________________________________________________________________ */


var db;
var rtdb;
var auth;
var storage;
let noticesRef;

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    //console.log(uid);
    //initializePage();
    // ...
    db = firebase.firestore();
    rtdb = firebase.database();
    auth = firebase.auth();
    storage = firebase.storage();
    initNotices();
  } else {
    // User is signed out
    // ...
    location.href = "index.html";
  }
});

//displays notices on page load
async function initNotices() {
  noticesRef.once('value', (snap)=>{
    snap.forEach((childSnap)=>{
      let dat = childSnap.val();
      let card = "<div class=\"notice\"><center>"+ dat.fileName +"</center><a href="+ dat.downloadLink +"> Download</a></div>";
      let dom = new DOMParser().parseFromString(card,'text/html');
      let card_element = dom.body.firstElementChild;
      document.getElementById('mainNoticeBoard').append(card_element);
    }).then((res)=>{
      forRefresh();
      console.log(res);
    });
  });
}

//starts up the listener
async function forRefresh() {
  noticesRef.on('child_added', (data)=>{
    location.reload();
  })
}

/* __________________________________________________________________________ */
/* __________________________________________________________________________ */
