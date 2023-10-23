window.onload = function(){
    document.getElementById("foto").onchange = function(e){ 
        //e.target 
        let n = e.target.value; 

   
        let imagen = "<img src='img/combo/" + n + ".jpeg' class='img-fluid img-thumbnail rounded' alt='estadio' />"; 
        let text = ["Esta es 12ª ocasión de las 23 ediciones de los World Airport Awards- en la que Singapur se corona como mejor del mundo. Convertido en una auténtica estrella del panorama aeroportuario global, Changi no ha parado de crecer y recibir reconocimientos internacionales por su belleza arquitectónica y sus numerosas actividades lúdicas, desde que fuera inaugurado en 1981. Cuenta, entre otras propuestas, con jardines al aire libre e interiores con senderos, mariposas y flores, zonas de relax, jacuzzi, e incluso piscina o lavandería.", 
        "Se encuentra en la bahía de Tokio, a 15 kilómetros del centro de la capital, y puede presumir de ser considerado por los viajeros el tercero mejor de 2023, el más limpio del planeta, el mejor aeródromo nacional y el más accesible para personas con movilidad reducida. El aeropuerto más transitado no solo de Tokio, sino de todo el país, cuenta con una gran plataforma de observación de 360º en la azotea con cafetería, un gigantesco centro comercial y un planetario para observar las estrellas, entre otros servicios.",
        "Considerado uno de los principales núcleos aéreos del noreste asiático, ocupa un espacio artificial construido entre las islas Yeongjongdo y Yongyudo inaugurado en 2001. Sus modernas instalaciones, que este año ocupan la cuarta posición en el ranking mundial, ofrecen, entre otras propuestas, campo de golf, spa, una piscina en la azotea y museos de cultura coreana y artes tradicionales. Los World Airport Awards de este año han situado Incheon en la cuarta posición mundial, además de ser reconocido por el excelente servicio del personal aeroportuario y su gestión de la inmigración.",
        "El aeropuerto de Munich-Franz Josef Strauss, el segundo más transitado de Alemania tras Frankfurt, es un fijo en los World Airport Awards. En esta ocasión ocupa la séptima posición en el ranking global -la misma que el año pasado- y, además, ha sido reconocido como nº1 de Europa Central y el que ofrece mejor servicio de personal aeroportuario del Viejo Continente. Se encuentra a 28 kilómetros del centro de la ciudad y dispone de un larguísimo catálogo de servicios para los pasajeros, entre los que sobresalen salas de exposiciones, minigolf, microcabinas para dormir o circuitos de autobús para conocer las instalaciones."
        ];
    
   
    document.getElementById("output-img").innerHTML = imagen;   
    document.getElementById("output-txt").innerHTML = text[n - 1]; 
    }; 
};


document.getElementById("btn-clean").onclick = function(){ 
    document.getElementById("output-img").innerHTML = "";
    document.getElementById("output-txt").innerHTML = "";
    document.getElementById("foto").value = "";
}