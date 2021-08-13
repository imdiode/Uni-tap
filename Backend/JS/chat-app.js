$('.friend-drawer--onhover').on('click', function() {

    $('.chat-bubble').hide('slow').show('slow');

});





function chatStarted() {
    const chatList = document.querySelector("#chatList");
    const message_workspace = document.querySelector(".message-workspace");

    if (chatList.classList.contains('clicked') == false) {
        chatList.className += "clicked";
    }

}

