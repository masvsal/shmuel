function addRow(table, img){
    let row = table.insertRow(0)
    let cell = row.insertCell()
    cell.appendChild( img )
}

var table = document.querySelector("table")
var index = 1
var tempImg = new Image();
tempImg.onload = function(){
    appendImage();
}
var tryLoadImage = function( index ){
    tempImg.src = 'pages/1-gallery/images/' + index + '.JPG';
}
var appendImage = function(){
    var img = document.createElement('img');
    img.classList.add('gallery-img');
    img.src = tempImg.src;
    addRow(table, img)
    tryLoadImage( ++index )
}
tryLoadImage( index );