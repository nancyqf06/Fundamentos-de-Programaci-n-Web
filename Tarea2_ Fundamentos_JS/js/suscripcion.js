'use strict';

window.addEventListener('load', init, false);

function init() {
    let email = document.getElementById('inscriptionTxt');
    let btnEnviar = document.getElementById('btnSend');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let alerta = document.getElementById('mensajeAlert');

    btnEnviar.onclick = function() {
        email = inscriptionTxt.value;

        if (email === '') {
            showAlert('El campo email está vacío', 'error');
        } else if (expressionEmail.test(email) === false) {
            showAlert('Email inválido', 'error');
        } else {
            showCustomAlert();
            emailjs.sendForm('service_p7ux8td', 'template_uai0lzp', '#suscripcion', '5iMv1nfifXgJ39cat');
            cleanInputs();
        }
    }

    function showAlert(message, type) {
        Swal.fire({
            text: message,
            icon: type,
            timer: 3000,
            showConfirmButton: false
        });
    }

    function showCustomAlert() {
        Swal.fire({
            title: 'Gracias por suscribirte!',
            icon: 'success',
            html: '<iframe src="https://lottie.host/?file=7a15456d-5d01-43fa-81ef-52f3495702dc/yEN4rlwRtx.json"></iframe>',
            showConfirmButton: false
        });
    }

    function cleanInputs() {
        inscriptionTxt.value = '';
    }
}
