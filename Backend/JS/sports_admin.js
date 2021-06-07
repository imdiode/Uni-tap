function po_click(){
    document.getElementById('sub-1').className += ' active-sub';
    document.getElementById('sub-2').className = 'content-sub';
    document.getElementById('sub-3').className = 'content-sub';
    document.getElementById('sub-4').className = 'content-sub';
    document.getElementById('sub-5').className = 'content-sub';
    document.getElementById('menu-item-1').className += ' active';
    document.getElementById('menu-item-2').className = 'menu';
    document.getElementById('menu-item-3').className = 'menu';
    document.getElementById('menu-item-4').className = 'menu';
    document.getElementById('menu-item-5').className = 'menu';
}


function oh_click(){
    document.getElementById('sub-2').className += ' active-sub';
    document.getElementById('sub-1').className = 'content-sub';
    document.getElementById('sub-3').className = 'content-sub';
    document.getElementById('sub-4').className = 'content-sub';
    document.getElementById('sub-5').className = 'content-sub';
    document.getElementById('menu-item-2').className += ' active';
    document.getElementById('menu-item-1').className = 'menu';
    document.getElementById('menu-item-3').className = 'menu';
    document.getElementById('menu-item-4').className = 'menu';
    document.getElementById('menu-item-5').className = 'menu';
}


function tm_click(){
    document.getElementById('sub-3').className += ' active-sub';
    document.getElementById('sub-1').className = 'content-sub';
    document.getElementById('sub-2').className = 'content-sub';
    document.getElementById('sub-4').className = 'content-sub';
    document.getElementById('sub-5').className = 'content-sub';
    document.getElementById('menu-item-3').className += ' active';
    document.getElementById('menu-item-2').className = 'menu';
    document.getElementById('menu-item-1').className = 'menu';
    document.getElementById('menu-item-4').className = 'menu';
    document.getElementById('menu-item-5').className = 'menu';
}

function as_click(){
    document.getElementById('sub-4').className += ' active-sub';
    document.getElementById('sub-1').className = 'content-sub';
    document.getElementById('sub-2').className = 'content-sub';
    document.getElementById('sub-3').className = 'content-sub';
    document.getElementById('sub-5').className = 'content-sub';
    document.getElementById('menu-item-4').className += ' active';
    document.getElementById('menu-item-1').className = 'menu';
    document.getElementById('menu-item-2').className = 'menu';
    document.getElementById('menu-item-3').className = 'menu';
    document.getElementById('menu-item-5').className = 'menu';
}

function ds_click(){
    document.getElementById('sub-5').className += ' active-sub';
    document.getElementById('sub-1').className = 'content-sub';
    document.getElementById('sub-2').className = 'content-sub';
    document.getElementById('sub-3').className = 'content-sub';
    document.getElementById('sub-4').className = 'content-sub';
    document.getElementById('menu-item-5').className += ' active';
    document.getElementById('menu-item-1').className = 'menu';
    document.getElementById('menu-item-2').className = 'menu';
    document.getElementById('menu-item-3').className = 'menu';
    document.getElementById('menu-item-4').className = 'menu';
}

function additem ()
{
    if (document.getElementById("add__item").style.display == "block")
    {
        document.getElementById("add__item").style.display = "none";
        document.getElementById("sub-5").className = "content-sub";
    }
    else
    {
        document.getElementById("add__item").style.display = "block";
        document.getElementById("sub-5").className += " blur";
    }
}

function closeadditem ()
{
    document.getElementById("add__item").style.display = "none";
    document.getElementById('sub-5').className += ' active-sub';
    document.getElementById("sub-5").className -= " blur";
}

function closedeleteequi ()
{
    document.getElementById("delete_equipment").style.display = "none";
    document.getElementById('sub-5').className += ' active-sub';
    document.getElementById("sub-5").className -= " blur";
}

function deleteequi ()
{
    if (document.getElementById("delete_equipment").style.display == "block")
    {
        document.getElementById("delete_equipment").style.display = "none";
        document.getElementById("sub-5").className = "content-sub";
    }
    else
    {
        document.getElementById("delete_equipment").style.display = "block";
        document.getElementById("sub-5").className += " blur";
    }
}

function closedeletelog ()
{
    document.getElementById("delete_log").style.display = "none";
    document.getElementById('sub-4').className += ' active-sub';
    document.getElementById("sub-4").className -= " blur";
}

function deletelog ()
{
    if (document.getElementById("delete_log").style.display == "block")
    {
        document.getElementById("delete_log").style.display = "none";
        document.getElementById("sub-4").className = "content-sub";
    }
    else
    {
        document.getElementById("delete_log").style.display = "block";
        document.getElementById("sub-4").className += " blur";
    }
}

function closeupdatelog ()
{
    document.getElementById("update_log").style.display = "none";
    document.getElementById('sub-4').className += ' active-sub';
    document.getElementById("sub-4").className -= " blur";
}

function updatelog ()
{
    if (document.getElementById("update_log").style.display == "block")
    {
        document.getElementById("update_log").style.display = "none";
        document.getElementById("sub-4").className = "content-sub";
    }
    else
    {
        document.getElementById("update_log").style.display = "block";
        document.getElementById("sub-4").className += " blur";
    }
}