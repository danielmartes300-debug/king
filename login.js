let intentos = 0;
const maxIntentos = 4;

const form = document.getElementById("loginForm");
const mensaje = document.getElementById("mensajeLogin");

form.addEventListener("submit", function(e){
    e.preventDefault(); // IMPORTANTE

    intentos++;
    console.log("Intento:", intentos); // para verificar en consola

    if (intentos <= 3) {
        mensaje.style.color = "#c0392b";
        mensaje.textContent = "Contraseña incorrecta, intenta de nuevo";
    } 
    
    if (intentos === 4) {
        mensaje.style.color = "#27ae60";
        mensaje.textContent = "Contraseña correcta";

        setTimeout(() => {
            window.location.href = "token.html";
        }, 1000);
    }
});
