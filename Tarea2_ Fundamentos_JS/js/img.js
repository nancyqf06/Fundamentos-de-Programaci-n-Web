


    //querySelector permite elegir el selector llamado select del form
let seleccionar = document.querySelector('select');
//addEventListener es un listado de eventos (biblioteca) que lista al evento CHANGE y carga la funcion llamada elegir
seleccionar.addEventListener('change', elegir);

function elegir(){
    /*variable que lleva el valor seleccionado por el usuario*/
    let eleccion = seleccionar.value;
    /*condicoonales*/
    if(eleccion == 0){
        descripcion.innerHTML = '';

    }  
    if(eleccion == 1){
        descripcion.innerHTML = 'El contenedor innovador combina de manera inteligente tecnologías sostenibles para ofrecer un ambiente confortable durante todas las estaciones del año. Equipado con paneles solares, este contenedor aprovecha la energía del sol durante el verano para proporcionar una fuente eficiente de electricidad, reduciendo así la dependencia de fuentes de energía convencionales.'
    }else if (eleccion == 2){
       descripcion.innerHTML = 'En invierno, la tecnología de calefacción integrada garantiza un ambiente cálido y acogedor, optimizando el confort térmico y minimizando el impacto ambiental. Esta solución versátil representa una respuesta innovadora a las necesidades energéticas y climáticas, ofreciendo un espacio sostenible y adaptable en cualquier momento del año.' 
    }
}