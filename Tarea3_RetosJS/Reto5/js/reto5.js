window.onload = function() {
    document.getElementById("vehiculo").onchange = function(e) {
        //destino de la opcion seleccionada, la a junto con n son variables que me guarda el destino
        a = e.target.value;
        if (a == "Avalon") {
            var imagen = "imagenes/avalon.png";
        } else if (a == "Camry") {
            var imagen = "imagenes/camry.png";
        } else if (a == "Corolla") {
            var imagen = "imagenes/corolla.png";
        } else if (a == "Supra") {
            var imagen = "imagenes/supra.png";
        }
        document.getElementById("imagen").src = imagen;
    }
    document.getElementById("año").onchange = function(es) {
        //n es para obtener el valor seleccionado, n me va a servir para saber cual es la version del carro
        n = es.target.value;
    }
}



function calcular() {
    var vehiculo = document.getElementById("vehiculo").value;
    var año = document.getElementById("año").value;

    if (vehiculo === "Seleccione un vehículo" || año === "Seleccione un año") {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Por favor, seleccione un vehículo y un año antes de calcular.",
        });
    
    } else {
            var montoCuota = 0;
            if (a == "Avalon") {
                if (n == "2022") {
                    montoCuota = 325;
                    swal.fire({
                        imageUrl: "imagenes/avalon.png",
                        html: "<p> Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageWidth: 600,
                        imageHeight: 250,
                        imageAlt: "Vehiculo Avalon",
                    })
                } else {
                    montoCuota = 580;
                    swal.fire({
                        imageUrl: "imagenes/avalon2.jpg",
                        html: "<p>Cuota mensual:</p> " + "$" + montoCuota,
                        imageWidth: 600,
                        imageHeight: 250,
                        imageAlt: "Vehiculo Avalon",
                    })
                }
            } else if (a == "Camry") {
                if (n == "2022") {
                    montoCuota = 400;
                    swal.fire({
                        imageUrl: "imagenes/camry.png",
                        html: "<p> Cuota mensual:</p> " + "$" + montoCuota,
                        imageWidth: 600,
                        imageHeight: 250,
                        imageAlt: "Vehiculo Camry",
                    })
                } else {
                    montoCuota = 200;
                    swal.fire({
                        imageUrl: "imagenes/camry2.jpg",
                        html: "<p> Cuota mensual:</p> " + "$" + montoCuota,
                        imageWidth: 600,
                        imageHeight: 250,
                        imageAlt: "Vehiculo Camry",
                    })
                }
            } else if (a == "Corolla") {
                if (n == "2022") {
                    montoCuota = 410;
                    swal.fire({
                        imageUrl: "imagenes/corolla.png",
                        html: "<p> Cuota mensual</p> " + "$" + montoCuota,
                        imageWidth: 700,
                        imageHeight: 250,
                        imageAlt: "Vehiculo Corolla",
                    })
                } else {
                    montoCuota = 480;
                    swal.fire({
                        imageUrl: "imagenes/corolla2.png",
                        html: "<p> Cuota mensual:</p> " + "$" + montoCuota,
                        imageWidth: 700,
                        imageHeight: 250,
                        imageAlt: "Vehiculo Corolla",
                    })
                }
            } else if (a == "Supra") {
                if (n == "2022") {
                    montoCuota = 600;
                    swal.fire({
                        imageUrl: "imagenes/supra.png",
                        html: "<p> Cuota mensual:</p> " + "$" + montoCuota,
                        imageWidth: 600,
                        imageHeight: 200,
                        imageAlt: "Vehiculo Supra",
                    })
                } else {
                    montoCuota = 750;
                    swal.fire({
                        imageUrl: "imagenes/supra2.jpeg",
                        html: "<p> Cuota mensual:</p> " + "$" + montoCuota,
                        imageWidth: 600,
                        imageHeight: 200,
                        imageAlt: "Vehiculo Supra",
                    })
                }
            }
    }    
}

function limpiar() {
    document.getElementById("vehiculo").selectedIndex = 0; // Restablece la selección del primer elemento en el select de vehículo
    document.getElementById("año").selectedIndex = 0; //esta del año
}
