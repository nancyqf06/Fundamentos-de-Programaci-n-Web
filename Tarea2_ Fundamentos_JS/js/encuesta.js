

function evaluarEncuesta() {

    //Preguntas 1  y 2.
    var pregunta1 = document.getElementById("r1").value
    var pregunta2 = document.getElementById("r2").value
    //Codigo para saber la opcion escogida en el input radio de la pregunta 3
    var pregunta3 = ""
    document.getElementsByName("opinion2")
        .forEach(radio => {
            if (radio.checked) {
                console.log(radio.value);
                pregunta3 = radio.value
            }
        });

    var pregunta4 = ""
    document.getElementsByName("opinion")
        .forEach(radio => {
            if (radio.checked) {
                console.log(radio.value);
                pregunta4 = radio.value
            }
        });    




    //Validacion de los datos ingresados
    if (pregunta1 == "" || pregunta2 == "" || pregunta3 == "" || pregunta4 == "") {
        swal.fire({
            title: "Atención usuario",
            text: "Por favor no deje campos vacíos.",
            icon: "warning",
            confirmButtonColor: '#000',
        })
    }else{    


        var mensaje1 = "";
        if (pregunta3 == "Buena") {
            mensaje1 = "Apreciamos tu calificación!";
        } else if (pregunta3 == "Regular") {
            mensaje1 = "Tus opiniones son valiosas para nosotros.";
        } else {
            mensaje1 = "Lamentamos tu mala experiencia.";
        }

        var mensaje2 = "";
        if (pregunta4 == "Muy probable") {
            mensaje2 = "Gracias por preferirnos!";
        } else {
            mensaje2 = "Trabajaremos en nuestros puntos de mejora, muchas gracias.";
        }
        
        
        emailjs.sendForm('service_1nftfcv', 'template_hk8iorh', '#encuesta', 'j6urrk7gekevPMa10');
        swal.fire({  
            title: "Respuestas enviadas",
            text: "Gracias por realizar nuestra encuesta",
            icon: "success",
            confirmButtonColor: '#000',
            html: "<iframe src='https://lottie.host/?file=ba0060ca-2bbb-4ec5-a2d1-54d9dd816289/iCdwdI01ME.json'></iframe>"
            
        })
        //resultado de la encuesta
        document.getElementById("res0").innerHTML = "¡Gracias por sus respuestas!";
        document.getElementById("res1").innerHTML = mensaje1
        document.getElementById("res2").innerHTML = mensaje2
     
    }
    
}

function btnlimpiar(){
    document.getElementById("r1").value = '';
    document.getElementById("r2").value = '';
    document.getElementById("radio3").checked = '';
    document.getElementById("radio4").checked = '';
    document.getElementById("radio5").checked = '';
    document.getElementById("radio1").checked = '';
    document.getElementById("radio2").checked = '';
}    

