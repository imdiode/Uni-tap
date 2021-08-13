window.addEventListener('load', function() {

    let file;

    const dropArea = document.querySelector(".drag-container"),
        dragText = dropArea.querySelector("header"),
        button = dropArea.querySelector("button"),
        input = dropArea.querySelector("input");


    button.onclick = () => {
        input.click();
    }

    input.addEventListener("change", function() {
        file = this.files[0];
        dropArea.classList.add("active");
        showFile();
    });


    dropArea.addEventListener("dragover", (event) => {
        event.preventDefault();
        dropArea.classList.add("active");
        dragText.textContent = "Release Profile File";
    });

    dropArea.addEventListener("dragleave", () => {
        dropArea.classList.remove("active");
        dragText.textContent = "Drag & Drop Profile File";
    });

    dropArea.addEventListener("drop", (event) => {
        event.preventDefault();
        file = event.dataTransfer.files[0];
        showFile();
    });

    function showFile() {
        let fileType = file.type;
        let validExtensions = ["text/csv"];
        if (validExtensions.includes(fileType)) {
            // add code to upload it to firebase here
            dropArea.classList.remove("active");
            dragText.textContent = file.name + " Uploaded! Drag & Drop another profile file";
        } else {
            alert("This is not an CSV File!");
            dropArea.classList.remove("active");
            dragText.textContent = "Drag & Drop Profile File";
        }
    }
});