/*
TA 18
Objetivo: Filtrar elementos de una lista mientras se escribe en un input.
Crear un archivo HTML con una lista <ul> de personas. Dicha lista debe ser
renderizada de forma dinamica desde un archivo JavaScript usando template
strings.
Anadir un input de busqueda.
Mientras el usuario escribe en el input, los elementos de la lista que no
coincidan con el texto deben ocultarse.
*/

const personas = ["Ana", "Bruno", "Carla", "Diego", "Elena", "Federico"];
const inputFiltro = document.getElementById("filtro");
const listaPersonas = document.getElementById("listaPersonas");

function renderizarPersonas() {
  listaPersonas.innerHTML = personas
    .map((persona) => `<li>${persona}</li>`)
    .join("");
}

function filtrarPersonas() {
  const busqueda = inputFiltro.value.toLowerCase();
  const elementos = listaPersonas.querySelectorAll("li");

  elementos.forEach((elemento) => {
    const coincide = elemento.textContent.toLowerCase().includes(busqueda);
    elemento.hidden = !coincide;
  });
}

renderizarPersonas();
inputFiltro.addEventListener("input", filtrarPersonas);
