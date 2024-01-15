function loadCSV() {
    let fileName = document.getElementById("fileName").value;
    let filenumber = document.getElementById("filenumber").value;
    fileName = fileName.endsWith(".csv") ? fileName : fileName + filenumber + ".csv";
    fetch(fileName)
        .then((response) => response.text())
        .then((data) => {
            let table = document.getElementById("csvTable");
            let rows = data.split("\n");
            let headers = rows[0].split(",");
            for (let i = 0; i < headers.length; i++) {
                headers[i] = headers[i].trim();
            }
            for (let i = 1; i < rows.length; i++) {
                let cells = rows[i].split(",");
                let row = table.insertRow();
                for (let j = 0; j < cells.length; j++) {
                    let cell = row.insertCell();
                    cell.innerText = cells[j].trim();
                }
            }
            let headerRow = table.insertRow(0);
            for (let i = 0; i < headers.length; i++) {
                let cell = headerRow.insertCell();
                cell.innerText = headers[i];
            }
        });


    // var button = document.getElementById('myButton');


    // button.addEventListener('click', function () {

    //   // Change the URL of the current page to the next page
    //   window.location.href = 'places.html';

    // });

}
var button = document.getElementById('myButton');


button.addEventListener('click', function () {

    // Change the URL of the current page to the next page
    window.location.href = 'places.html';

});