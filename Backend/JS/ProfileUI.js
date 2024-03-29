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

// const buttonPhoto = document.getElementById('w-link');
// const inputPhoto = document.getElementById('fileButton');
//
// buttonPhoto.onclick = () => {
//     inputPhoto.click();
// }

function edit_name() {
    document.getElementById("cname").style.display = "block";
}

function ceditName() {
    document.getElementById("cname").style.display = "none";
    document.getElementById("fename").innerHTML = "";
    document.getElementById("lename").innerHTML = "";
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
const readMoreBtn = document.getElementById("buttonReadMore");
const profilePic = document.getElementById("w-link");

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
    //readMoreBtn.addEventListener("click", readMore);
    profilePic.addEventListener("click", changeProfilePic);
    fileButton.addEventListener('change', uploadPicture);

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
        document.getElementById("studentUID").innerHTML = profileData.studentUID;
        document.getElementById("navBarPic").src = profileData.profilePicture;
        document.getElementById("profilePictureLarge").src = profileData.profilePicture;
        document.getElementById("address").innerHTML = "<td>" + (profileData.address.line1)||" " + "<br>" + "</td>";
    }).catch((err) => {
        console.log(err);
        //and open error window telling user about error, Try to log error on rtd
    })
}
/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------*/
//change name function
async function changeName() {
    try {
        user_firestore_data.firstName = document.getElementById("fename").value;
        user_firestore_data.middleName = document.getElementById("mename").value;
        user_firestore_data.lastName = document.getElementById("lename").value;
        profileRef.set(user_firestore_data).then(() => {
          firebase.auth().currentUser.updateProfile({
            displayName: user_firestore_data.firstName + " " + user_firestore_data.lastName,
          }).then(() => {
            ceditName();
            loadProfile();
          })
        });
    } catch (err) {
        console.log(err.message);
        //and open error window telling user about error, Try to log error on rtdb
    }
}
/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------*/
//change email function
async function changeEmail() {
    try {
        user_firestore_data.contactEmailId = document.getElementById("nmail").value;
        profileRef.set(user_firestore_data).then(() => {
            document.getElementById("emailClose").click();
            loadProfile();
        });
    } catch (err) {
        console.log(err.message);
        //and open error window telling user about error, Try to log error on rtdb
    }
}
/*----------------------------------------------------------------------------*/


/*----------------------------------------------------------------------------*/
//change phoneNumber function
async function changePhNo() {
    try {
        user_firestore_data.mobileNumber = document.getElementById("nphone").value;
        profileRef.set(user_firestore_data).then(() => {
                document.getElementById("phNoClose").click();
                loadProfile();
        });
    } catch (err) {
        console.log(err.message);
        //and open error window telling user about error, Try to log error on rtdb
    }
}
/*----------------------------------------------------------------------------*/


/*----------------------------------------------------------------------------*/
async function changeAddr() {
    try {
        user_firestore_data.address = {
          line1: document.getElementById("naddrL1").value,
          line2: document.getElementById("naddrL2").value,
          district: document.getElementById("naddrDistrict").value,
          pincode: document.getElementById("naddrPin").value,
          city: document.getElementById("naddrCity").value,
        }
        profileRef.set(user_firestore_data).then(() => {
            document.getElementById("addrClose").click();
            loadProfile();
        });
    } catch (err) {
        console.log(err.message);
        //and open error window telling user about error, Try to log error on rtdb
    }
}
/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------*/
//readMore function
async function readMore() {
    document.getElementById("address").innerHTML = "<td>" + user_firestore_data.address.line1 + "<br>" + user_firestore_data.address.line2 + "<br>" + user_firestore_data.address.district + "<br>" + user_firestore_data.address.city + "<br>" + user_firestore_data.address.pincode + "<br>" + "</td>";
}
async function readLess() {
    document.getElementById("address").innerHTML = "<td>" + user_firestore_data.address.line1 + "</td>";
}

function readMoreFunction() {
    var dots = document.getElementById("dots");
    var contentText = document.getElementById("content");
    var btnText = document.getElementById("buttonReadMore");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        contentText.style.display = "none";
        readLess();
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        contentText.style.display = "inline";
        readMore();
    }
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

async function uploadPicture(even) {
    file = even.target.files[0];
    console.log(file);
    myPicRef = storage.ref(user_firestore_data.uid + "/" + "ProfilePic.jpg");
    uploadTask = myPicRef.put(file).then((e) => {
        e.ref.getDownloadURL().then((downloadURL) => {
            user_firestore_data.profilePicture = downloadURL;
            profileRef.set(user_firestore_data).then(() => {
                firebase.auth().currentUser.updateProfile({
                        //displayName: user_firestore_data.firstName + " " + user_firestore_data.lastName,
                        photoURL: downloadURL,
                    }).then(() => {
                        loadProfile();
                    }).catch((err) => {
                        console.log(err);
                    })
                    //console.log('File available at', downloadURL);
            });
        });
    });
}
/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------*/
//while uploading the file

/*----------------------------------------------------------------------------*/

/* __________________________________________________________________________ */
/* __________________________________________________________________________ */
