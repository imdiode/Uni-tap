var msgScreen = document.getElementById("chat-panel"); //the <ul> that displays all the <li> msgs
var msgForm = document.getElementById("messageForm"); //the input form
var msgInput = document.getElementById("msg-input"); //the input element to write messages
var msgBtn = document.getElementById("msg-btn"); //the Send button
const addMessage = firebase.functions().httpsCallable('addMessage');
const newChat = firebase.functions().httpsCallable('createChat');
var new_user_list_screen = document.getElementById("new_user_list");
var currentuseruid="";
var currentuseremail="";

var chatuidd = "";

const db1 = firebase.database();

async function chatlistupdate() {
    const db2 = firebase.firestore();
    chatlists = db2.collection('users').doc(firebase.auth().currentUser.uid).collection('chats').doc('IndividualChats');
    chatlists.get().then((doc) => {
        chatdata = doc.data();
        chatlist = chatdata.chats;
        const listscreen = document.getElementById("chat_list");
        listscreen.innerHTML=" ";
        for (let i = 0; i < chatlist.length; i++) {
            const chatlistupdate = `<div class="friend-drawer friend-drawer--onhover" onclick="displaychat('${chatlist[i].emailId}', '${chatlist[i].chatID}')">
                                    <img class="profile-image" src="" alt="">
                                    <div class="text">
                                    <h4>${chatlist[i].emailId}</h4>
                                    </div>
                                    </div>`
            listscreen.innerHTML += chatlistupdate;
        }
    });
}

async function init() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
        // User is signed in, see docs for a list of available properties
            currentuseruid = user.uid;
            currentuseremail = user.email;
            chatlistupdate();
        } else {
            // User is signed out
            // ...
            location.href = "index.html";
        }
    });
}
document.addEventListener('DOMContentLoaded', init);

const updateMsgs = data => {
    const {from, text, timeStamp} = data.val();
    var msg = ""
    if (from == currentuseruid) {
        msg = "<div class=\"row no-gutters\"><div class=\"col-md-3 offset-md-9\"><div class=\"chat-bubble chat-bubble--right\">" + text + "</div></div></div>";
    } else {
        msg = "<div class=\"row no-gutters\"><div class=\"col-md-3\"><div class=\"chat-bubble chat-bubble--left\">" + text + "</div></div></div>"
    }
    let dom = new DOMParser().parseFromString(msg, 'text/html');
    let msg_element = dom.body.firstElementChild;
    document.getElementById('chat-panel').append(msg_element);

    //auto scroll to bottom
    document.getElementById("chat-panel").scrollTop = document.getElementById("chat-panel").scrollHeight;
}


async function displaychat(recieveremail, chat_id) {
    msgScreen = document.getElementById("chat-panel");
    msgScreen.innerHTML = "";
    const me = document.querySelector("#profile").innerHTML = recieveremail;
    ref = "/chats/" + chat_id + "/messages";
    const msgRef = db1.ref(ref);
    msgRef.on('child_added', updateMsgs);
    msgForm = document.getElementById("messageForm"); //the input form
    msgInput = document.getElementById("msg-input"); //the input element to write messages
    msgBtn = document.getElementById("msg-btn"); //the Send button
    msgForm.addEventListener('submit', sendMessage);
    chatuidd = chat_id;
}

async function sendMessage(e) {
    e.preventDefault();
    const text = String(msgInput.value);

    if (!text.trim()) return alert('Please type a message'); //no msg submitted
    addMessage({ message: text, chatUID: chatuidd, recepient: " ", timestamp: Date() })
        .then((result) => {
            console.log(result.data);
        });
    msgInput.value = "";
}

async function shownewchatlist(){
    document.getElementById("userlist").innerHTML=" ";
    ref2 = "/users";
    userref = db1.ref(ref2);
    userref.on('child_added', (snapshot, prevChildKey) => {
        const newPost = snapshot.val();
        var newuser = "<li  onclick=\"addnewchat('"+newPost.emailId+"')\">"+newPost.emailId+"</li>"+"<hr>";
        let dom = new DOMParser().parseFromString(newuser, 'text/html');
        let newuserelement = dom.body.firstElementChild;
    //console.log(newuserelement);
        document.getElementById("userlist").append(newuserelement);
    });
}

async function addnewchat(recieveremail){
    newChat({senderName:"", senderUID:currentuseruid, senderEmailId : currentuseremail, recipientEmailId:recieveremail})
    .then((result)=>{
	console.log(result);
    close_page_add();
    chatlistupdate();
})
}