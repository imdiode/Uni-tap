// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*
const firebaseConfig = {
  apiKey: "AIzaSyAaW3Wr58E9MRcWWf6_w8M-V57-SxgO2GI",
  authDomain: "ccas-77c96.firebaseapp.com",
  databaseURL: "https://ccas-77c96-default-rtdb.firebaseio.com",
  projectId: "ccas-77c96",
  storageBucket: "ccas-77c96.appspot.com",
  messagingSenderId: "95714386169",
  appId: "1:95714386169:web:6893537f9b0d6cbbb9c228",
  measurementId: "G-J42PYMQWX8"
};
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

*/
const msgScreen = document.getElementById("messages"); //the <ul> that displays all the <li> msgs
const msgForm = document.getElementById("messageForm"); //the input form
const msgInput = document.getElementById("msg-input"); //the input element to write messages
const msgBtn = document.getElementById("msg-btn"); //the Send button

const db = firebase.database();
const msgRef = db.ref("/msgs"); 

let name="";
function init() {
  name = prompt("Please enter your name");
}
document.addEventListener('DOMContentLoaded', init);


msgForm.addEventListener('submit', sendMessage);

function sendMessage(e){
    e.preventDefault();
    const text = msgInput.value;
  
      if(!text.trim()) return alert('Please type a message'); //no msg submitted
      const msg = {
          name: name,
          text: text
      };
  
      msgRef.push(msg);
      msgInput.value = "";
  }

  msgRef.on('child_added', updateMsgs);

  const updateMsgs = data =>{
    const {dataName, text} = data.val(); //get name and text
  
    //load messages, display on left if not the user's name. Display on right if it is the user.
    const msg = `<li class="${dataName == name ? "msg my": "msg"}"><span class = "msg-span">
      <i class = "name">${name}: </i>${text}
      </span>
    </li>`
  
    msgScreen.innerHTML += msg; //add the <li> message to the chat window
  
    //auto scroll to bottom
    document.getElementById("chat-window").scrollTop = document.getElementById("chat-window").scrollHeight;
  }

  
