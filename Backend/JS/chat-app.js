console.log("Hi")
const button_toadd = document.getElementsByClassName("add");

function add_new_user() {
    // const list_of_users = document.getElementsByClassName("list-users");
    const lst_users = document.getElementById("new_user_list");

    if (lst_users.classList.contains("show") == true) {
        lst_users.classList.remove("show")
    } else {
        lst_users.classList.add("show")
    }
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