/*
TA 15
Objetivo: Eliminar un elemento especifico de la lista.
Usando una copia del HTML anterior, agregar un boton "Eliminar ultimo elemento".
Al hacer clic en el boton, se debe eliminar el ultimo <li> de la lista.
*/

const inputTexto = document.getElementById("texto");
const lista = document.getElementById("lista");
const botonAgregar = document.getElementById("agregarElemento");
const botonEliminarUltimo = document.getElementById("eliminarUltimo");

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

botonEliminarUltimo.addEventListener("click", () => {
  const ultimoElemento = lista.lastElementChild;

  if (ultimoElemento) {
    lista.removeChild(ultimoElemento);
  }
});
