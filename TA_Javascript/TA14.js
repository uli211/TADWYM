/*
TA 14
Objetivo: Anadir nuevos elementos a una lista al hacer clic en un boton.
Crear una lista <ul> vacia en un archivo HTML.
Anadir un input y un boton que diga "Anadir elemento".
Al escribir texto en el input y hacer clic en el boton, se debe anadir un nuevo
<li> con el texto ingresado a la lista, y el texto del input debe borrarse.
*/

const inputTexto = document.getElementById("texto");
const lista = document.getElementById("lista");
const botonAgregar = document.getElementById("agregarElemento");

botonAgregar.addEventListener("click", () => {
  const texto = inputTexto.value.trim();

  if (texto === "") {
    return;
  }

  const nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = texto;
  lista.appendChild(nuevoElemento);
  inputTexto.value = "";
});
