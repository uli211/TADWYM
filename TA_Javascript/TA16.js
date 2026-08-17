/*
TA 16
Objetivo: Mostrar y ocultar un elemento al hacer clic en un boton.
Crear un archivo HTML con un elemento <p>, con un texto cualquiera.
Anadir un boton que diga "Mostrar/Ocultar".
Al hacer clic en el boton, el parrafo debe ocultarse si esta visible y mostrarse
si esta oculto.
*/

const parrafo = document.getElementById("parrafo");
const botonMostrarOcultar = document.getElementById("mostrarOcultar");

botonMostrarOcultar.addEventListener("click", () => {
  parrafo.hidden = !parrafo.hidden;
});
