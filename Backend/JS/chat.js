
const msgScreen = document.getElementById("chat-panel"); //the <ul> that displays all the <li> msgs
var msgForm = document.getElementById("messageForm"); //the input form
var msgInput = document.getElementById("msg-input"); //the input element to write messages
var msgBtn = document.getElementById("msg-btn"); //the Send button
const addMessage = firebase.functions().httpsCallable('addMessage');


const db1 = firebase.database();

const updateMsgs = data =>{
  const {senderid, text, timestamp} = data.val(); //get name and text
  //load messages, display on left if not the user's name. Display on right if it is the user.
//  var today = new Date();
 // var times = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
 var msg=""
 if(senderid == uid){
  msg = "<div class=\"row no-gutters\"><div class=\"col-md-3 offset-md-9\"><div class=\"chat-bubble chat-bubble--right\">"+text+"</div></div></div>";
 }
 else{
  msg = "<div class=\"row no-gutters\"><div class=\"col-md-3\"><div class=\"chat-bubble chat-bubble--left\">"+text+"</div></div></div>"
 }
  let dom = new DOMParser().parseFromString(msg,'text/html');
  let msg_element = dom.body.firstElementChild;
              //console.log(card_element);
  document.getElementById('chat-panel').append(msg_element);
   //add the <li> message to the chat window

  //auto scroll to bottom
  document.getElementById("chat-panel").scrollTop = document.getElementById("chat-panel").scrollHeight;
}


async function displaychat(recieveremail, chat_id) {

  const me = document.querySelector("#profile").innerHTML = recieveremail;
  ref="/chats/"+chat_id+"/messages";
  const msgRef = db1.ref(ref);
  msgRef.on('child_added', updateMsgs);
  msgForm = document.getElementById("messageForm"); //the input form
  msgInput = document.getElementById("msg-input"); //the input element to write messages
  msgBtn = document.getElementById("msg-btn"); //the Send button
  msgForm.addEventListener('submit', sendMessage);
}


async function chatlistupdate(){
  const db2=firebase.firestore();
  chatlists = db2.collection('users').doc(firebase.auth().currentUser.uid).collection('chats').doc('IndividualChats');
  chatlists.get().then((doc) => {
  chatdata=doc.data();
  chatlist=chatdata.chats;
  const listscreen =document.getElementById("chat_list");
  for(let i=0;i<chatlist.length;i++){
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


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    uid = user.uid;
    email = user.email;
    chatlistupdate();
  } else {
    // User is signed out
    // ...
    location.href = "index.html";
  }
});





async function sendMessage(e){
    e.preventDefault();
    const text = msgInput.value;
  
      if(!text.trim()) return alert('Please type a message'); //no msg submitted
      addMessage({message:text, chatUID:uid, recepient:" ", timestamp:Date()})
  .then((result)=>{
    console.log(result.data);
  });
      msgInput.value = "";
  }
