
if(document.getElementById("container-opt")) {
    document.getElementById('container-opt').addEventListener('change', galeria);
}
/*funcionalidad de la galeria evento onchange*/

function galeria() {
    var opciones = document.getElementById('container-opt').value;
    switch (opciones) {
        case "live":
            document.querySelector('.live-galeria').style.display = "block"
            document.querySelector('.work-galeria').style.display = "none"
            document.querySelector('.relax-galeria').style.display = "none"
            break;
        case "work":
            document.querySelector('.live-galeria').style.display = "none"
            document.querySelector('.work-galeria').style.display = "block"
            document.querySelector('.relax-galeria').style.display = "none"
            break;
        case "chill":
            document.querySelector('.live-galeria').style.display = "none"
            document.querySelector('.work-galeria').style.display = "none"
            document.querySelector('.relax-galeria').style.display = "block"
            break;
        default:
            document.querySelector('.live-galeria').style.display = "none"
            document.querySelector('.work-galeria').style.display = "none"
            document.querySelector('.relax-galeria').style.display = "none"    
    } 
} 



let buttonAboutUsVolver = document.getElementById("about-us-volver");
let aboutUsVideo = document.getElementById("about-us-video");

if(buttonAboutUsVolver) {
    buttonAboutUsVolver.onclick = function() {
        aboutUsVideo.style.display = "none";
    }
}

//scroll menu
$(document).ready(function() {
    $(window).scroll(function(){

        var height = $(window).scrollTop();
        if(height > 2) {
            $("#menu").addClass("menu-white");
        } else {
            $("#menu").removeClass("menu-white");
        }
    });
});

// Función para revelar lightbox y agregar reproducción automática de YouTube
function ejecutar(div, video_id) {
    var video = document.getElementById(video_id).src;
    //adicionar el autoplay URL
    document.getElementById(video_id).src = video + '&autoplay=1';
    document.getElementById(div).style.display = 'block';
}


// Ocultar la caja y eliminar la reproducción automática de YouTube
function ocultar(div, video_id) {
    var video = document.getElementById(video_id).src;
    //remover el autoplay URL
    var cleaned = video.replace('&autoplay=1', '');
    document.getElementById(video_id).src = cleaned;
    document.getElementById(div).style.display = 'none';
}







