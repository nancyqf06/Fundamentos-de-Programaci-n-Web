
document.getElementById("user-options").addEventListener("change", function () {
  
    var selectedUser = this.value;
    var userFields = document.getElementById("user-fields");
    var passwordFields = document.getElementById("password-fields");
    var rememberFields = document.getElementById("remember-fields");
    var btonField = document.getElementById("btn-field");
    

    if (selectedUser === "") {
        userFields.style.display = "none"; 
        passwordFields.style.display = "none"; 
        rememberFields.style.display = "none"; 
        btonField.style.display = "none";
        
    } else {
        userFields.style.display = "block"; 
        passwordFields.style.display = "block"; 
        rememberFields.style.display = "block"; 
        btonField.style.display = "block";
        
    }
});


document.getElementById("btn-login").addEventListener("click", login); 

function validation_alert(ptext) {
    swal.fire({
        title: "Verificar la entrada de datos",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#198754",
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
                html: '<iframe width="320" height="240" src="https://lottie.host/?file=9e659c10-f2b6-4048-9d87-607562bc3991/5kaDhsCuq9.json"></iframe> <br><br><p>Redirigiendo..</p>',

            }).then(() => {
                 window.location.href = "https://www.ucenfotec.ac.cr/", "blank"; 
            });
        } else {
             text = "Usuario o contraseña incorrecta."; 
             validation_alert(text);
        }
    }    
}
