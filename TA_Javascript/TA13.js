/*
TA 13
Objetivo: Cambiar el texto de un elemento al hacer clic en un boton.
Crear un archivo HTML con un elemento <p> que tenga el texto "Texto original".
Anadir un boton con el texto "Cambiar texto".
Al hacer clic en el boton, el texto del parrafo debe cambiar a "Texto cambiado".
*/

const parrafo = document.getElementById("texto");
const botonCambiarTexto = document.getElementById("cambiarTexto");

botonCambiarTexto.addEventListener("click", () => {
  parrafo.textContent = "Texto cambiado";
});
