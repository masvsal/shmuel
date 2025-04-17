import csv from 'jquery-csv';

function addRow(table, img){
    let row = table.insertRow()
    let cell = row.insertCell()
    cell.appendChild( img )
}

var table = document.querySelector("table")
fetch("pages/3-interesting/links.csv")
    .then(response => response.text())
    .then(text => console.log(text))
/* const links_arr = csv.toArray("pages/3-interesting/links.csv");
console.log(links_arr);
for (var i = 0; i < links_arr.length; i++){
    var a = document.createElement('a');
    var linkText = document.createTextNode(i[1]);
    a.appendChild(linkText);
    a.title = i[1];
    a.href = i[0];
    addRow(table, a)
} */