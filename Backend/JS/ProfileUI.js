const dataModalOpenButton = document.querySelectorAll('[data-modal-target]');
const dataCloseButton = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

dataModalOpenButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
})

dataCloseButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.change-modal');
        closeModal(modal);
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active');
}

/* ______________________________By @Enculandus______________________________ */
/* __________________________________________________________________________ */
//Constants
var db;
var auth;
var profileRef;
var storageRef;

//user elements Initializations
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        //console.log(uid);
        loadProfile();
        // ...
    } else {
        // User is signed out
        // ...
        location.href = "index.html";
    }
});


//ui elements
const addrChangeBtn = document.getElementById("addr-change");
const phNumberChangeBtn = document.getElementById("phone-change");
const emailChangeBtn = document.getElementById("email-change");
const readMoreBtn = document.getElementById("readMore");
const profilePic = document.getElementById("changeAvatar");

var user_firestore_data;

var uploader = document.getElementById("uploader");
var fileButton = document.getElementById("fileButton");

/*----------------------------------------------------------------------------*/
//It will run on startup
try {

    //listeners
    addrChangeBtn.addEventListener("click", changeAddr);
    phNumberChangeBtn.addEventListener("click", changePhNo);
    emailChangeBtn.addEventListener("click", changeEmail);
    readMoreBtn.addEventListener("click", readMore);
    profilePic.addEventListener("click", changeProfilePic);

} catch (err) {
    console.log(err.message);
    //and open error window telling user about error, Try to log error on rtdb
};
/*----------------------------------------------------------------------------*/


/*----------------------------------------------------------------------------*/
//to initialize the page

/*----------------------------------------------------------------------------*/
//to load profile on startup or, refresh anytime in between
async function loadProfile() {
    try {
        db = firebase.firestore();
        auth = firebase.auth();
        storage = firebase.storage();
        profileRef = db.collection('users').doc(firebase.auth().currentUser.uid);

    } catch (err) {
        console.log(err.message);
    }

    profileRef.get().then((doc) => {
        let profileData = doc.data();
        user_firestore_data = profileData;
        document.getElementById("navFirstName").innerHTML = profileData.firstName;
        document.getElementById("fullName").innerHTML = profileData.firstName + " " + profileData.lastName;
        document.getElementById("semester").innerHTML = profileData.semester;
        document.getElementById("emailId").innerHTML = profileData.emailId;
        document.getElementById("contactEmailId").innerHTML = profileData.contactEmailId;
        document.getElementById("mobileNumber").innerHTML = profileData.mobileNumber;
        document.getElementById("address").innerHTML = "<td>" + profileData.address.line1 + "<br>" + "</td>";
        document.getElementById("studentUID").innerHTML = profileData.studentUID;
        document.getElementById("profilePictureNav").src = profileData.profilePicture;
        document.getElementById("profilePictureLarge").src = profileData.profilePicture;
    }).catch((err) => {
        console.log(err);
        //and open error window telling user about error, Try to log error on rtdb
    })
}
/*----------------------------------------------------------------------------*/


/*----------------------------------------------------------------------------*/
//change email function
async function changeEmail() {
    try {
        user_firestore_data.contactEmailId = document.getElementById("nmail").value;
        profileRef.set(user_firestore_data).then(() => {
            document.getElementById("emailClose").click();
        });
    } catch (err) {
        console.log(err.message);
        //and open error window telling user about error, Try to log error on rtdb
    }
    loadProfile();
}
/*----------------------------------------------------------------------------*/


/*----------------------------------------------------------------------------*/
//change phoneNumber function
async function changePhNo() {
    try {
        user_firestore_data.mobileNumber = document.getElementById("nphone").value;
        profileRef.set(user_firestore_data).then(() => {
            document.getElementById("phNoClose").click();
        });
    } catch (err) {
        console.log(err.message);
        //and open error window telling user about error, Try to log error on rtdb
    }
    loadProfile();
}
/*----------------------------------------------------------------------------*/


/*----------------------------------------------------------------------------*/
async function changeAddr() {
    try {
        user_firestore_data.address.line1 = document.getElementById("naddrL1").value;
        user_firestore_data.address.line2 = document.getElementById("naddrL2").value;
        user_firestore_data.address.district = document.getElementById("naddrDistrict").value;
        user_firestore_data.address.pincode = document.getElementById("naddrPin").value;
        user_firestore_data.address.city = document.getElementById("naddrCity").value;
        profileRef.set(user_firestore_data).then(() => {
            document.getElementById("addrClose").click();
        });
    } catch (err) {
        console.log(err.message);
        //and open error window telling user about error, Try to log error on rtdb
    }
    loadProfile();
}
/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------*/
//readMore function
async function readMore() {
    document.getElementById("address").innerHTML = "<td>" + user_firestore_data.address.line1 + "<br>" + user_firestore_data.address.line2 + "<br>" + user_firestore_data.address.district + "<br>" + user_firestore_data.address.city + "<br>" + user_firestore_data.address.pincode + "<br>" + "</td>";
}
/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------*/
//change avatar
async function changeProfilePic() {
  fileButton.click();
}
/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------*/
//setting up listener
var file;
var myPicRef;
var uploadTask;

fileButton.addEventListener('click', function(e){
  file = e.target.files[0];
  myPicRef = storage.ref("profilePics/"+ user_firestore_data.uid + "/" + "ProfilePic" + file.name );
  uploadTask = myPicRef.put(file);
  uploadTask.on('state_changed',
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      uploader.value = progress;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    },
    (error) => {
      // Handle unsuccessful uploads
      console.log(error);
    },
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        user_firestore_data.profilePicture = downloadURL;
        profileRef.set(user_firestore_data).then(() => {
            loadProfile();
            console.log('File available at', downloadURL);
        });
      });
    }
  );
})
/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------*/
//while uploading the file

/*----------------------------------------------------------------------------*/

/* __________________________________________________________________________ */
/* __________________________________________________________________________ */
