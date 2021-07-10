
//window.onload = loadProfile();

var db = firebase.firestore();
var profileRef = db.collection('users').doc(auth.currentUser.uid);

async function loadProfile() {
  profileRef.get().then((doc)=>{
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
  }).catch((err)=>{
    console.log(err);
  })
}

function disp ()
{
    if (document.getElementById("1exp").style.display == "block")
    {
        document.getElementById("1exp").style.display = "none";
    }
    else
    {
        document.getElementById("1exp").style.display = "block";
    }
}
