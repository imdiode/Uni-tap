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
    lst_users.classList.add("show")
    shownewchatlist();
}

function close_page_add() {
    const lst_users = document.getElementById("new_user_list");
    lst_users.classList.remove("show")
}