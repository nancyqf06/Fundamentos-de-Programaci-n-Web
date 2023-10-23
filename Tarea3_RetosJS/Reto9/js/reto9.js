document.addEventListener("DOMContentLoaded", function () {
   
    const cardholderNameInput = document.getElementById("cardholderName");
    const cardNumberInput = document.getElementById("cardNumber");
    const expirationDateInput = document.getElementById("expirationDate");
    const mastercardButton = document.getElementById("mastercard");
    const visaButton = document.getElementById("visa");
    

    mastercardButton.addEventListener("click", function () {
        cardholderNameInput.value = "Jose Salas Sanabria";
        cardNumberInput.value = "**** **** **** 1234";
        expirationDateInput.value = "12/25";
        Swal.fire({
            title: "¿Seguro que desea pagar con esta tarjeta?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "OK",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                title:"Favor ingresar código de seguridad",
                icon: "error", 
                });
             
            }
        });
       
    });

 
    visaButton.addEventListener("click", function () {
        cardholderNameInput.value = "Nancy Quesada Flores";
        cardNumberInput.value = "**** **** **** 5678";
        expirationDateInput.value = "10/24";
        Swal.fire({
            title: "¿Seguro que desea pagar con esta tarjeta?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "OK",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                title:"Favor ingresar código de seguridad",
                icon: "error", 
                });
             
            }
        });
        
    });
});