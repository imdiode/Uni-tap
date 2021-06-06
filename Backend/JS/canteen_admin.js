function po_click(){
  document.getElementById('sub-1').className += ' active-sub';
  document.getElementById('sub-2').className = 'content-sub';
  document.getElementById('sub-3').className = 'content-sub';
  document.getElementById('sub-4').className = 'content-sub';
  document.getElementById('menu-item-1').className += ' active';
  document.getElementById('menu-item-2').className = 'menu';
  document.getElementById('menu-item-3').className = 'menu';
  document.getElementById('menu-item-4').className = 'menu';
}

function oh_click(){
  document.getElementById('sub-2').className += ' active-sub';
  document.getElementById('sub-1').className = 'content-sub';
  document.getElementById('sub-3').className = 'content-sub';
  document.getElementById('sub-4').className = 'content-sub';
  document.getElementById('menu-item-2').className += ' active';
  document.getElementById('menu-item-1').className = 'menu';
  document.getElementById('menu-item-3').className = 'menu';
  document.getElementById('menu-item-4').className = 'menu';
}

function tm_click(){
  document.getElementById('sub-3').className += ' active-sub';
  document.getElementById('sub-2').className = 'content-sub';
  document.getElementById('sub-1').className = 'content-sub';
  document.getElementById('sub-4').className = 'content-sub';
  document.getElementById('menu-item-3').className += ' active';
  document.getElementById('menu-item-2').className = 'menu';
  document.getElementById('menu-item-1').className = 'menu';
  document.getElementById('menu-item-4').className = 'menu';
}

function pm_click(){
  document.getElementById('sub-4').className += ' active-sub';
  document.getElementById('sub-3').className = 'content-sub';
  document.getElementById('sub-2').className = 'content-sub';
  document.getElementById('sub-1').className = 'content-sub';
  document.getElementById('menu-item-4').className += ' active';
  document.getElementById('menu-item-3').className = 'menu';
  document.getElementById('menu-item-2').className = 'menu';
  document.getElementById('menu-item-1').className = 'menu';
}

function check_empty() {
  if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
  alert("Fill All Fields !");
  } else {
  document.getElementById('form').submit();
  alert("Form Submitted Successfully...");
  }
  }
  //Function To Display Popup
  function div_show() {
  document.getElementById('abc').style.display = "block";
  }
  //Function to Hide Popup
  function div_hide(){
  document.getElementById('abc').style.display = "none";
  }

  function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }