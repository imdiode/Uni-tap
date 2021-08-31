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
        var reader = new FileReader();
                //For Browsers other than IE.
                if (reader.readAsBinaryString) {
                    reader.onload = function (e) {
                        ProcessExcel(e.target.result);
                    };
                    reader.readAsBinaryString(file);
                }
        //showFile();
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
        //showFile();
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

/* ______________________________By @Enculandus______________________________ */
/* __________________________________________________________________________ */
async function ProcessExcel(data) {
            //Read the Excel File data.
            var workbook = XLSX.read(data, {
                type: 'binary'
            });

            //Fetch the name of First Sheet.
            var firstSheet = workbook.SheetNames[0];

            //Read all rows from First Sheet into an JSON array.
            var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);

            console.log(excelRows);

            excelRows.forEach((item, i) => {
              console.log(item.username);
              await firebase.auth().createUserWithEmailAndPassword(item.username, item.password);
            });


            // for (row in excelRows.data) {
            //   //console.log(row);
            //   console.log(excelRows[row].username, excelRows[row].password);
            //   console.log("done")
            // }
        };
/* __________________________________________________________________________ */
/* __________________________________________________________________________ */
