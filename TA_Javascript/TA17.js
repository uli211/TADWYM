/*
TA 17
Objetivo: Crear un contador que aumente cada vez que se hace clic en un boton.
Crear un archivo HTML con un elemento <p> con el numero 0.
Anadir un boton con el texto "Incrementar".
Al hacer clic en el boton, el numero dentro del <span> debe incrementarse en uno.
*/

const contador = document.getElementById("contador");
const botonIncrementar = document.getElementById("incrementar");

botonIncrementar.addEventListener("click", () => {
  contador.textContent = Number(contador.textContent) + 1;
});
