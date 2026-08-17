/*
TA 2
Dado un archivo HTML, crear un archivo .js que implemente una funcion llamada
reverseString(texto: string), que invierta el parametro texto y lo imprima
usando console.log().
Pueden usarse metodos provistos por JavaScript; la idea no es hacer el reverso
a mano.
*/

function reverseString(texto) {
  const textoInvertido = texto.split("").reverse().join("");
  console.log(textoInvertido);
  return textoInvertido;
}

if (typeof document !== "undefined") {
  const formTA2 = document.getElementById("formTA2");
  const inputTexto = document.getElementById("texto");
  const resultado = document.getElementById("resultado");

  formTA2.addEventListener("submit", (event) => {
    event.preventDefault();
    resultado.textContent = reverseString(inputTexto.value);
  });
}
