//obtener el modal
var modal = document.getElementById("modal1");
var modal1 = document.getElementById("modal2");

//obtener la imagen y agregarla dentro del modal - 
//Usar el texto alternativo "alt" como subtítulo

//imagen
var img = document.getElementById("myImg"); //estos 3 id est+an en el html
var img1 = document.getElementById("myImg1"); //estos 3 id est+an en el html
//contenido
var modalImg = document.getElementById("img01");

//titulo 
var captionText = document.getElementById("caption");


//al dar clic a la foto en pequeño 
img.onclick = function() {
    //desplegar la foto
    modal.style.display = "block";
    //apunta el contenido del modal
    modalImg.src = this.src;
    //asigna el ALT debabo de la imagen
    captionText.innerHTML = this.alt;
}

img1.onclick = function() {
    //desplegar la foto
    modal.style.display = "block";
    //apunta el contenido del modal
    modalImg.src = this.src;
    //asigna el ALT debabo de la imagen
    captionText.innerHTML = this.alt;
}

//obtenga el elemento <span> que cierra el modal, este close está en el css
var cerrar = document.getElementsByClassName("close")[0];

//cuando el usuario hace clic en <span> (x), cierre el modal
cerrar.onclick = function() {
    modal.style.display = "none";
}