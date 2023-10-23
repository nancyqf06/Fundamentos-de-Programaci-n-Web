function c1(){
    document.getElementById("vehiculo").src = "imagenes/azul.png";
    document.getElementById("color").innerHTML = "DARK BLUE MICA METALLIC (8W7)";

}

function c2(){
    document.getElementById("vehiculo").src = "imagenes/gris.png";
    document.getElementById("color").innerHTML =" SILVER METALLIC (1F7)";

}

function c3(){
    document.getElementById("vehiculo").src = "imagenes/negro.png";
    document.getElementById("color").innerHTML = "BLACK MICA INK (209)";

}

function c4(){
    document.getElementById("vehiculo").src = "imagenes/rojo.png";
    document.getElementById("color").innerHTML = "RED MC (3T3)";

}

function c5(){
    document.getElementById("vehiculo").src = "imagenes/celeste.png";
    document.getElementById("color").innerHTML = "CELESTITE GRAY (1K3)";

}


function c6(){
    document.getElementById("vehiculo").src = "imagenes/blanco.png";
    document.getElementById("color").innerHTML = "BLANCO PERLADO (040)";

}

document.getElementById("btn-clean").onclick = function(){ 
    document.getElementById("output-img").innerHTML = "";
    document.getElementById("output-txt").innerHTML = "";
    document.getElementById("foto").value = "";
}

document.getElementById("btn-clean").onclick = function() {
    c6(); 
}




