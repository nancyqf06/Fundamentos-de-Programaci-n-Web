document.getElementById("btn-login").addEventListener("click", login); 

function validation_alert(ptext) {
    swal.fire({
        title: "Verificar la entrada de datos",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#000",
        html: '<iframe src="https://lottie.host/?file=09208956-ae3f-4442-8791-c0f43916f6ee/HVY7jEirj2.json"></iframe> <br><p>' + ptext + " </p>", 
    });
}

function login() {
    console.log(localStorage);
    let user_input = document.getElementById("in-txt-user").value;
    let pass_input = document.getElementById("in-txt-pass").value;
    let username = "cenfo";
    let password = "123";
    let input = [user_input, pass_input]; //
    let input_id = ["in-txt-user", "in-txt-pass"];
    let error_count = 0; 
    let text = "";
    
    for (let i = 0; i < input.length; i++) {
        document.getElementById(input_id[i]).classList.remove("error"); 
        if (input[i] == "") { 
            text = "Los campos requeridos NO pueden estar vacios.";
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error"); 
            error_count++;
        }
    }

    if (error_count == 0) {  
        if (user_input == username && pass_input == password) {
            if (document.getElementById("remember-me").checked) {
                 // Guardar las credenciales en sessionStorage
                 localStorage.setItem("username", user_input);
                 localStorage.setItem("password", pass_input);
            }
            Swal.fire({
                title: "Credenciales correctas",
                showConfirmButton: false,
                timer: 5000,
                html: '<iframe width="320" height="240" src="https://lottie.host/?file=a6f5a4e7-589f-4ace-8bcf-16c2d08594c4/WqXQviID0e.json"></iframe> <br><br><p>Redirigiendo..</p>',

            }).then(() => {
                 window.location.href = "https://www.ucenfotec.ac.cr/", "blank"; 
            });
        } else {
             text = "Usuario o contraseña incorrecta."; 
             validation_alert(text);
        }
    }    
}