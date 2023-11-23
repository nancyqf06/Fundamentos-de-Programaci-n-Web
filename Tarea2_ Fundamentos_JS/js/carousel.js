//variable de arreglo
let micarrusel = {};
let foto = 0;
let total = 0;

//arreglo para cargar las imagenes y titulo de cada foto.
micarrusel = [{ imageurl: "imagenes/6.jpg", titulo: "parte1" },
    { imageurl: "imagenes/1.jpg", titulo: "parte2" },
    { imageurl: "imagenes/2.jpg", titulo: "parte3" },
    { imageurl: "imagenes/3.jpg", titulo: "parte4" },
    { imageurl: "imagenes/5.jpg", titulo: "parte5" },
 
];


//funcion que permite cambiar las imagenes (anterior y siguiente)
let cambiar = function(mas) {
    //almacena la cantidad total de imagenes
    total = micarrusel.length;
    //almacena la proxima foto
    foto = foto + mas;
    //condicionales para determinar la imagen a presentar
    if (foto > total) {
        foto = 1
    }
    if (foto < 1) {
        //tiene la cantidad total de imagenes
        foto = total;
    }

    //instrucciones que apuntan a cada imagen y titulo que brinda cada logotipo
    document.thumb.src = micarrusel[foto - 1].imageurl;
    titulo = document.getElementById('titulo');
    titulo.innerText = micarrusel[foto - 1].titulo;
}


           
$(document).ready(function () {

    $('#carouselDarkVariant').carousel({
    interval: 1000, // Cambia el intervalo en milisegundos (por defecto, 5000 ms)
    });
});
