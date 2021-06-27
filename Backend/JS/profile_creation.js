function po_click() {
    document.getElementById('sub-1').className += ' active-sub';
    document.getElementById('sub-2').className = 'content-sub';
    document.getElementById('menu-item-1').className += ' active';
    document.getElementById('menu-item-2').className = 'menu';
}


function oh_click() {
    document.getElementById('sub-2').className += ' active-sub';
    document.getElementById('sub-1').className = 'content-sub';
    document.getElementById('menu-item-2').className += ' active';
    document.getElementById('menu-item-1').className = 'menu';
}