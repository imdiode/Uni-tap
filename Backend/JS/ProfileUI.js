async function loadProfile() {
    var db = firebase.firestore();
    var auth = firebase.auth();
    var profileRef = db.collection('users').doc(firebase.auth().currentUser.uid);
    profileRef.get().then((doc) => {
        let profileData = doc.data();
        document.getElementById("navFirstName").innerHTML = profileData.firstName;
        document.getElementById("fullName").innerHTML = profileData.firstName + " " + profileData.lastName;
        document.getElementById("semester").innerHTML = profileData.semester;
        document.getElementById("emailId").innerHTML = profileData.emailId;
        document.getElementById("mobileNumber").innerHTML = profileData.mobileNumber;
        document.getElementById("address").innerHTML = "<td>" + profileData.address.line1 + "<br>" + "</td>";
        document.getElementById("studentUID").innerHTML = profileData.studentUID;
        document.getElementById("profilePictureNav").src = profileData.profilePicture;
        document.getElementById("profilePictureLarge").src = profileData.profilePicture;
    }).catch((err) => {
        console.log(err);
    })
}


function disp() {
    if (document.getElementById("1exp").style.display == "block") {
        document.getElementById("1exp").style.display = "none";
    } else {
        document.getElementById("1exp").style.display = "block";
    }
}

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