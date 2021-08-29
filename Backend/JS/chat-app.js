const button_toadd = document.getElementsByClassName("add");

// function open_page() {
//     const lst_users = document.getElementById("new_user_list");
//     lst_users.classList.add("show")
//     shownewchatlist();
// }

// function close_page() {
//     const lst_users = document.getElementById("new_user_list");
//     lst_users.classList.remove("show")
// }

function chatStarted() {
    const chatList = document.querySelector("#chatList");
    const message_workspace = document.querySelector(".message-workspace");

    if (chatList.classList.contains('clicked') == false) {
        chatList.className += "clicked";
    }
}




function open_page_add() {
    const lst_users = document.getElementById("new_user_list");
    const chat_list = document.getElementById("chat_list")
    const chat_panel = document.getElementById("chat-panel")

    lst_users.classList.add("show")
    chat_list.style.opacity = "0.1"
    chat_panel.style.opacity = "0.3"
        // lst_users.style.filter = "blur(0px) !important"
}

function close_page_add() {
    const lst_users = document.getElementById("new_user_list");
    const chat_list = document.getElementById("chat_list")
    const chat_panel = document.getElementById("chat-panel")

    lst_users.classList.remove("show")
    chat_list.style.opacity = "1"
    chat_panel.style.opacity = "1"
}