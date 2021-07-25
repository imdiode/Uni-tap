const nandan = document.querySelector("#nandan");
const aniket = document.querySelector("#aniket");
const mohit = document.querySelector("#mohit");
const aryan = document.querySelector("#aryan");
const mann = document.querySelector("#mann");


function chatStarted() {
    const chatList = document.querySelector("#chatList");
    const message_workspace = document.querySelector(".message-workspace");

    if (chatList.classList.contains('clicked') == false) {
        chatList.className += "clicked";
    }

}

function myfunctNandan() {
    chatStarted();
    const me = document.querySelector(".profile").innerHTML = "Nandan";
}

function myfunctAniket() {
    chatStarted();
    const me = document.querySelector(".profile").innerHTML = "Aniket"
}

function myfunctMohit() {
    chatStarted();
    const me = document.querySelector(".profile").innerHTML = "Mohit"
}

function myfunctAryan() {
    chatStarted();
    const me = document.querySelector(".profile").innerHTML = "Aryan"
}

function myfunctMann() {
    chatStarted();
    const me = document.querySelector(".profile").innerHTML = "Mann"
}