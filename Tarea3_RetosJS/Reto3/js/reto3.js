function leavePage() {
    const seleccion = document.getElementById('opciones').value;

    if (seleccion) {
        Swal.fire({
            title: "¿Seguro que quiere dejar la página?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "OK",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                switch (seleccion) {
                    case 'A':
                        redirect("https://www.novacinemas.cr/cartelera/avenida-escazu/");
                        break;
                    case 'B':
                        redirect("https://www.novacinemas.cr/cartelera/plaza-real-alajuela/");
                        break;
                    case 'C':
                        redirect("https://www.novacinemas.cr/cartelera/ciudad-del-este-curridabat/");
                        break;
                }
            }
        });
    }
}

function redirect(url) {
    Swal.fire({
        icon: "success",
        title: "Redirigiendo...",
        showConfirmButton: false,
        timer: 2000,
    }).then(() => {
        window.location.href = url;
    });
}
