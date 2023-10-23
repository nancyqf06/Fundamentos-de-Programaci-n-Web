//funcion que permite evaluar el test evaluativo
function buscar(){
    var id = document.getElementById('id_txt').value;
    var resultado = document.getElementById('resultado');

    //isNaN(numero). Comprueba que el valor número que sea ha convertido previamente es un número y no letra
    //parseINT convierte un string a entero
    if (isNaN(parseInt(id))){    //si se digita una letra invoca el desplegable de abajo
        //invoca un deplegable usando la libreria sweetalert
        Swal.fire({
            icon: 'error',
            title: 'Atención usuario',
            text: 'El campo está vacío /No digite letras'
        });
        return false;
    } else    
    //validacion como vacio 



    if (id == "") { //las comillas indica vacio y las dos barras es el operador "o"
        //DESPLEGABLE js CON TIEMPO LIMITE 5SEG
        Swal.fire({                           //swalfire es una regla de la libreria, siempre se ponen, hay otras!
            title: 'Atención Amigo!',
            text: 'Ha digitado una letra, digite solo números por favor...',
            icon: 'info',
            timer: 5000,   //son 5segundos
            onOpen: function(){            //esto siempre va automatico por la libreria, yo soy el que escojo es el timer
                swal.showLoading()
            }
        }).then(
            function() {},
            function(dismiss) {
                if (dismiss === 'timer') {
                    console.log('Desplegable cerrada')
                }
            }
        )

    } else {
        if (id == 117089632){
            resultado.innerHTML = 'Esteban Aguilar Mora';
            document.getElementById("ima1").style.display = 'block';
            document.getElementById("ima0").style.display = 'none';
            document.getElementById("ima2").style.display = 'none';
            document.getElementById("ima3").style.display = 'none';
            document.getElementById("ima4").style.display = 'none';

        } else {
            if (id == 116014897) {
                resultado.innerHTML = 'Alonso Hérnandez Cervantes';
                document.getElementById("ima2").style.display = 'block';
                document.getElementById("ima0").style.display = 'none';
                document.getElementById("ima1").style.display = 'none';
                document.getElementById("ima3").style.display = 'none';
                document.getElementById("ima4").style.display = 'none';

            } else {
                if (id == 116030849) {
                    resultado.innerHTML = 'Nancy Quesada Flores';
                    document.getElementById("ima3").style.display = 'block';
                    document.getElementById("ima0").style.display = 'none';
                    document.getElementById("ima1").style.display = 'none';
                    document.getElementById("ima2").style.display = 'none';
                    document.getElementById("ima4").style.display = 'none';
                    
                } else {
                    if (id == 116983655){
                        resultado.innerHTML = 'Amanda Zamora Fallas'; 
                        document.getElementById("ima4").style.display = 'block';
                        document.getElementById("ima0").style.display = 'none';
                        document.getElementById("ima1").style.display = 'none';
                        document.getElementById("ima2").style.display = 'none';
                        document.getElementById("ima3").style.display = 'none'; 

                    } else {
                        // Manejo de usuario no encontrado si la cédula no está en el mapeo
                        Swal.fire({
                            icon: 'error',
                            title: 'Atención usuario',
                            text: 'Usuario no existe',
                        });
                    }
                               
                }         
            }           
        }
    }
       
}
//cierre de la función             
 
function limpiar(){
    document.getElementById('id_txt').value = "";
    resultado.innerHTML = '';
    document.getElementById("ima0").style.display = 'block';
    document.getElementById("ima1").style.display = 'none';
    document.getElementById("ima2").style.display = 'none';
    document.getElementById("ima3").style.display = 'none';
    document.getElementById("ima4").style.display = 'none';
}