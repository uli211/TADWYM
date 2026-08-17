/*
TA 7
Dado un archivo HTML, crear un archivo .js que implemente una funcion llamada
getTheTitles(books: Array), que devuelva e imprima en consola un nuevo arreglo
que contenga solamente los titulos de los libros guardados en el parametro
books.
Se pueden usar metodos provistos por JavaScript.
*/

function getTheTitles(books) {
  const titulos = books.map((book) => book.title);
  console.log(titulos);
  return titulos;
}

if (typeof document !== "undefined") {
  const formTA7 = document.getElementById("formTA7");
  const textareaBooks = document.getElementById("books");
  const resultado = document.getElementById("resultado");

  formTA7.addEventListener("submit", (event) => {
    event.preventDefault();

    try {
      const books = JSON.parse(textareaBooks.value);
      resultado.textContent = JSON.stringify(getTheTitles(books), null, 2);
    } catch (error) {
      resultado.textContent = "El JSON ingresado no es valido.";
    }
  });
}
