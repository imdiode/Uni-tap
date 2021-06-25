function po_click(){
    document.getElementById('sub-1').className += ' active-sub';
    document.getElementById('sub-2').className = 'content-sub'; 
    document.getElementById('menu-item-1').className += ' active';
    document.getElementById('menu-item-2').className = 'menu';
}


function oh_click(){
    document.getElementById('sub-2').className += ' active-sub';
    document.getElementById('sub-1').className = 'content-sub';
    document.getElementById('menu-item-2').className += ' active';
    document.getElementById('menu-item-1').className = 'menu';
}

function dropHandler(ev) {
    console.log('File(s) dropped');
  
    ev.preventDefault();
  
    if (ev.dataTransfer.items) {
      for (var i = 0; i < ev.dataTransfer.items.length; i++) {
        if (ev.dataTransfer.items[i].kind === 'file') {
          var file = ev.dataTransfer.items[i].getAsFile();
          console.log('... file[' + i + '].name = ' + file.name);
        }
      }
    } else {
      for (var i = 0; i < ev.dataTransfer.files.length; i++) {
        console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
      }
    }
  }

function dragOverHandler(ev) {
    console.log('File(s) in drop zone');
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }