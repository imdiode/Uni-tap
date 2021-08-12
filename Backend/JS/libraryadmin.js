function po_click(){
    document.getElementById('sub-1').className += ' active-sub';
    document.getElementById('sub-2').className = 'content-sub';
    document.getElementById('sub-3').className = 'content-sub';
    document.getElementById('sub-4').className = 'content-sub';
    document.getElementById('sub-5').className = 'content-sub';
    document.getElementById('menu-item-1').className += ' active';
    document.getElementById('menu-item-2').className = 'menu';
    document.getElementById('menu-item-3').className = 'menu';
    document.getElementById('menu-item-4').className = 'menu';
    document.getElementById('menu-item-5').className = 'menu';
}


function oh_click(){
    document.getElementById('sub-2').className += ' active-sub';
    document.getElementById('sub-1').className = 'content-sub';
    document.getElementById('sub-3').className = 'content-sub';
    document.getElementById('sub-4').className = 'content-sub';
    document.getElementById('sub-5').className = 'content-sub';
    document.getElementById('menu-item-2').className += ' active';
    document.getElementById('menu-item-1').className = 'menu';
    document.getElementById('menu-item-3').className = 'menu';
    document.getElementById('menu-item-4').className = 'menu';
    document.getElementById('menu-item-5').className = 'menu';
}


function tm_click(){
    document.getElementById('sub-3').className += ' active-sub';
    document.getElementById('sub-1').className = 'content-sub';
    document.getElementById('sub-2').className = 'content-sub';
    document.getElementById('sub-4').className = 'content-sub';
    document.getElementById('sub-5').className = 'content-sub';
    document.getElementById('menu-item-3').className += ' active';
    document.getElementById('menu-item-2').className = 'menu';
    document.getElementById('menu-item-1').className = 'menu';
    document.getElementById('menu-item-4').className = 'menu';
    document.getElementById('menu-item-5').className = 'menu';
}

function as_click(){
    document.getElementById('sub-4').className += ' active-sub';
    document.getElementById('sub-1').className = 'content-sub';
    document.getElementById('sub-2').className = 'content-sub';
    document.getElementById('sub-3').className = 'content-sub';
    document.getElementById('sub-5').className = 'content-sub';
    document.getElementById('menu-item-4').className += ' active';
    document.getElementById('menu-item-1').className = 'menu';
    document.getElementById('menu-item-2').className = 'menu';
    document.getElementById('menu-item-3').className = 'menu';
    document.getElementById('menu-item-5').className = 'menu';
}

function ds_click(){
    document.getElementById('sub-5').className += ' active-sub';
    document.getElementById('sub-1').className = 'content-sub';
    document.getElementById('sub-2').className = 'content-sub';
    document.getElementById('sub-3').className = 'content-sub';
    document.getElementById('sub-4').className = 'content-sub';
    document.getElementById('menu-item-5').className += ' active';
    document.getElementById('menu-item-1').className = 'menu';
    document.getElementById('menu-item-2').className = 'menu';
    document.getElementById('menu-item-3').className = 'menu';
    document.getElementById('menu-item-4').className = 'menu';
}

function additem ()
{
    if (document.getElementById("add__item").style.display == "block")
    {
        document.getElementById("add__item").style.display = "none";
        document.getElementById("sub-5").className = "content-sub";
    }
    else
    {
        document.getElementById("add__item").style.display = "block";
        document.getElementById("sub-5").className += " blur";
    }
}

function closeadditem ()
{
    document.getElementById("add__item").style.display = "none";
    document.getElementById('sub-5').className += ' active-sub';
    document.getElementById("sub-5").className -= " blur";
}

function closedeletebook ()
{
    document.getElementById("delete_book").style.display = "none";
    document.getElementById('sub-5').className += ' active-sub';
    document.getElementById("sub-5").className -= " blur";
}

function deletebook ()
{
    if (document.getElementById("delete_book").style.display == "block")
    {
        document.getElementById("delete_book").style.display = "none";
        document.getElementById("sub-5").className = "content-sub";
    }
    else
    {
        document.getElementById("delete_book").style.display = "block";
        document.getElementById("sub-5").className += " blur";
    }
}

function closedeletelog ()
{
    document.getElementById("delete_log").style.display = "none";
    document.getElementById('sub-4').className += ' active-sub';
    document.getElementById("sub-4").className -= " blur";
}

function deletelog ()
{
    if (document.getElementById("delete_log").style.display == "block")
    {
        document.getElementById("delete_log").style.display = "none";
        document.getElementById("sub-4").className = "content-sub";
    }
    else
    {
        document.getElementById("delete_log").style.display = "block";
        document.getElementById("sub-4").className += " blur";
    }
}

function closeupdatelog ()
{
    document.getElementById("update_log").style.display = "none";
    document.getElementById('sub-4').className += ' active-sub';
    document.getElementById("sub-4").className -= " blur";
}

function updatelog ()
{
    if (document.getElementById("update_log").style.display == "block")
    {
        document.getElementById("update_log").style.display = "none";
        document.getElementById("sub-4").className = "content-sub";
    }
    else
    {
        document.getElementById("update_log").style.display = "block";
        document.getElementById("sub-4").className += " blur";
    }
}

/* ______________________________By @Enculandus______________________________ */
/* __________________________________________________________________________ */
/* __________________________________________________________________________ */

/*----------------------------------------------------------------------------*/
//setting up variables
var fileButton = document.getElementById("noticeFile");
var file;
var noticeStorageRef;
var uploadTask;

//setting up listener
fileButton.addEventListener('change', uploadFile);

async function uploadFile(even) {
    var db = firebase.firestore();
    var rtdb = firebase.database();
    var auth = firebase.auth();
    var storage = firebase.storage();
    var notice = rtdb.ref("notices").push();
    var noticeId = notice.key();
    file = even.target.files[0];
    console.log(file);
    noticeStorageRef = storage.ref("notices" + "/" + noticeId +".pdf");
    noticeStorageRef.put(file).then((e) => {
        e.ref.getDownloadURL().then((downloadURL) => {
          notice.set({
            noticeUID: noticeId,
            timeStamp: Date(),
            downloadLink: downloadURL,
            uploadedBy: auth.currentUser.uid,
          }).then((re)=>{
            console.log(re);
          })
        });
    });
}
/*----------------------------------------------------------------------------*/


/* __________________________________________________________________________ */
/* __________________________________________________________________________ */
/* __________________________________________________________________________ */
