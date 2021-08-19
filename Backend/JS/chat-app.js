console.log("Hi")
const button_toadd = document.getElementsByClassName("add");

function open_page() {
    const lst_users = document.getElementById("new_user_list");
    lst_users.classList.add("show")

}

function close_page() {
    const lst_users = document.getElementById("new_user_list");
    lst_users.classList.remove("show")
}
// $('.friend-drawer--onhover').on('click', function() {

//     $('.chat-bubble').hide('slow').show('slow');

// });

function chatStarted() {
    const chatList = document.querySelector("#chatList");
    const message_workspace = document.querySelector(".message-workspace");

    if (chatList.classList.contains('clicked') == false) {
        chatList.className += "clicked";
    }
}