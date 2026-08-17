/*
TA 22
Objetivo: Detectar el cambio de tamano de la ventana del navegador.
Usar algun evento para detectar cuando el usuario cambia el tamano de la ventana.
Mostrar el tamano actual de la ventana en un parrafo dentro de la pagina.
*/

const tamanoVentana = document.getElementById("tamanoVentana");

function actualizarTamanoVentana() {
  tamanoVentana.textContent = `${window.innerWidth} x ${window.innerHeight}`;
}

window.addEventListener("resize", actualizarTamanoVentana);
actualizarTamanoVentana();
