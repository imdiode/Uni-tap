const button_toadd = document.getElementsByClassName("add");

function chatStarted() {
    const chatList = document.querySelector("#chatList");
    const message_workspace = document.querySelector(".message-workspace");

    if (chatList.classList.contains('clicked') == false) {
        chatList.className += "clicked";
    }
}




function open_page_add() {
    const lst_users = document.getElementById("new_user_list");

    lst_users.classList.add("show");
    // lst_users.style.filter = "blur(0px) !important"
    shownewchatlist();
}

function close_page_add() {
    const lst_users = document.getElementById("new_user_list");

    lst_users.classList.remove("show");
    //shownewchatlist();
}