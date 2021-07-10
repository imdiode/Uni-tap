var auth = firebase.auth();

function profile_click()
{
    location.href = "Profile.html";
}

function library_click()
{
    location.href = "library.html";
}

function help_click()
{
    location.href = "help_desk.html";
}

function griv_click()
{
    location.href = "grievance.html";
}

function aca_click()
{
    location.href = "academic_records.html";
}

function sports_click()
{
    location.href = "sports.html";
}

function canteen_click()
{
    location.href = "canteen.html";
}

async function firebaseLogout() {
  auth.signOut()
    .then((ret)=>{
      location.href = "index.html";
    })
    .catch((err)=>{
      console.log(err);
    });
}
