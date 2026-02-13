document.addEventListener("DOMContentLoaded", function(){

    const form = document.getElementById("formPrestamo");
    const loader = document.getElementById("loader");
    const mensajeImagen = document.getElementById("mensajeImagen");

    function validarCedula(cedula) {
        cedula = cedula.replace(/-/g, "");
        if (cedula.length !== 11) return false;

        let suma = 0;
        for (let i = 0; i < 10; i++) {
            let num = parseInt(cedula[i]) * ((i % 2 === 0) ? 1 : 2);
            if (num > 9) num -= 9;
            suma += num;
        }

        let digito = (10 - (suma % 10)) % 10;
        return digito == cedula[10];
    }

    function validarTelefono(tel){
        return /^(809|829|849)[0-9]{7}$/.test(tel.replace(/-/g,""));
    }

    function validarEmail(email){
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    if(form){
        form.addEventListener("submit", function(e){
            e.preventDefault();

            const cedula = document.getElementById("cedula").value.trim();
            const email = document.getElementById("email").value.trim();
            const telefono = document.getElementById("telefono").value.trim();

            mensajeImagen.style.color = "red";
            mensajeImagen.textContent = "";

            if (!validarCedula(cedula)) {
                mensajeImagen.textContent = "Cédula dominicana inválida.";
                return;
            }

            if (!validarEmail(email)) {
                mensajeImagen.textContent = "Correo electrónico inválido.";
                return;
            }

            if (!validarTelefono(telefono)) {
                mensajeImagen.textContent = "Teléfono dominicano inválido.";
                return;
            }

            mensajeImagen.style.color = "green";
            mensajeImagen.textContent = "Validando información...";

            loader.style.display = "block";

            setTimeout(function(){
                window.location.href = "login.html";
            }, 2000);
        });
    }

    function mostrarMensaje(){
        mensajeImagen.style.color = "red";
        mensajeImagen.textContent =
        "Complete el formulario para acceder a esta información exclusiva.";
    }

    document.getElementById("imgTop").addEventListener("click", mostrarMensaje);
    document.getElementById("imgBottom").addEventListener("click", mostrarMensaje);

});
