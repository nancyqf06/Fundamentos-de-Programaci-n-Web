window.onload = function() {
    document.getElementById("modelo").onchange = function(e) {
        a = e.target.value;
        if (a == "Maersk") {
            var imagen = "imagenes/MAERSK-1.jpg";
        } else if (a == "TRITON International") {
            var imagen = "imagenes/triton1.jpg";
        } else if (a == "CMA CGM") {
            var imagen = "imagenes/CMA2.jpeg";
        } else if (a == "Hapag-Lloyd") {
            var imagen = "imagenes/Hapag-Lloyd1.jpeg";
        }
        document.getElementById("imagen").src = imagen;
    }
    document.getElementById("cantidad").onchange = function(es) {
        n = es.target.value;
    }
}



function calcular() {
    var modelo = document.getElementById("modelo").value;
    var cantidad = document.getElementById("cantidad").value;

    if (modelo === "Seleccione un modelo" || cantidad === "Seleccione la cantidad") {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Por favor, seleccione un vehículo y un año antes de calcular.",
        });
    } else {
            var precio = 0;
            if (a == "Maersk") {
                if (n == "1") {
                    precio = 2500;
                    swal.fire({
                        imageUrl: "imagenes/MAERSK-1.jpg",
                        html: "<p>Precio estimado:</p> " + "$" + precio,
                        imageWidth: 600,
                        imageHeight: 250,
                        imageAlt: "Contenedor Maersk",
                    })
                } else {
                    precio = 6000;
                    swal.fire({
                        imageUrl: "imagenes/maersk-2.jpg",
                        html: "<p>Precio estimado:</p> " + "$" + precio,
                        imageWidth: 600,
                        imageHeight: 250,
                        imageAlt: "Contenedor Maersk",
                    })
                }
            } else if (a == "TRITON International") {
                if (n == "1") {
                    precio = 2300;
                    swal.fire({
                        html: "<p>Precio estimado:</p> " + "$" + precio,
                        imageUrl: "imagenes/triton1.jpg",
                        imageWidth: 600,
                        imageHeight: 250,
                        imageAlt: "TRITON International",
                    })
                } else {
                    precio = 5800;
                    swal.fire({
                        html: "<p>Precio estimado:</p> " + "$" + precio,
                        imageUrl: "imagenes/triton2.jpg",
                        imageWidth: 600,
                        imageHeight: 250,
                        imageAlt: "Contenedor TRITON International",
                    })
                }
            } else if (a == "CMA CGM") {
                if (n == "1") {
                    precio = 2800;
                    swal.fire({
                        html: "<p>Precio estimado:</p> " + "$" + precio,
                        imageUrl: "imagenes/CMA2.jpeg",
                        imageWidth: 700,
                        imageHeight: 250,
                        imageAlt: "Contenedor CMA CGM",
                    })
                } else {
                    precio = 6200;
                    swal.fire({
                        html: "<p>Precio estimado:</p> " + "$" + precio,
                        imageUrl: "imagenes/CMA1.jpg",
                        imageWidth: 700,
                        imageHeight: 250,
                        imageAlt: "Contenedor CMA CGM",
                    })
                }
            } else if (a == "Hapag-Lloyd") {
                if (n == "1") {
                    precio = 3000;
                    swal.fire({
                        html: "<p>Precio estimado:</p> " + "$" + precio,
                        imageUrl: "imagenes/Hapag-Lloyd1.jpeg",
                        imageWidth: 600,
                        imageHeight: 200,
                        imageAlt: "Contenedor Hapag-Lloyd",
                    })
                } else {
                    precio = 6000;
                    swal.fire({
                        html: "<p>Precio estimado:</p> " + "$" + precio,
                        imageUrl: "imagenes/hapaglloyd2.jpg",
                        imageWidth: 600,
                        imageHeight: 200,
                        imageAlt: "Contenedor Hapag-Lloyd",
                    })
                }
            }
        
    }
}    


function limpiar() {
    document.getElementById("modelo").selectedIndex = 0;
    document.getElementById("cantidad").selectedIndex = 0; 
}