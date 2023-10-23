    document.getElementById("btnFacturar").addEventListener("click", function() {
    let nombreCliente = document.getElementById("txtNombre").value;
    let artComp = document.getElementById("articulo").value;
    let cantidad = parseInt(document.getElementById("totalCant").value);
    let precio = parseFloat(document.getElementById("txtPrecio").value);

    if (nombreCliente.trim() === "" || artComp.trim() === "" || isNaN(cantidad) || isNaN(precio)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, complete todos los campos correctamente antes de continuar.'
        });
        return; // Detener la ejecución
    }

    if (nombreCliente.trim() === "" || /\d/.test(nombreCliente)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingrese un nombre válido.'
        });
        return; // Detener la ejecución
    }
  
    let subTotal = cantidad * precio;

   
    let iva = subTotal * 0.13;

    
    let servicio = subTotal * 0.05;

   
    let totalPagar = subTotal + iva + servicio;

    
    document.getElementById("nombreCliente").textContent = nombreCliente;
    document.getElementById("artComp").textContent =  artComp;
    document.getElementById("cantidad").textContent = cantidad;
    document.getElementById("precio").textContent = '₡' + precio;
    document.getElementById("subTotal").textContent = '₡' + subTotal
    document.getElementById("iva").textContent = '₡' + iva
    document.getElementById("servicio").textContent = '₡' + servicio
    document.getElementById("totalPagar").textContent = '₡' +totalPagar
});

function btnlimpiar(){
    document.getElementById("txtNombre").value = '';
    document.getElementById("articulo").value = '';
    document.getElementById("totalCant").value = '';
    document.getElementById("txtPrecio").value = '';
    document.getElementById("nombreCliente").value = '';
    document.getElementById("artComp").value = '';
    document.getElementById("cantidad").value = '';
    document.getElementById("precio").value = '';
    document.getElementById("subTotal").value = '';
    document.getElementById("iva").value = '';
    document.getElementById("servicio").value = '';
    document.getElementById("totalPagar").value = '';
}
    
