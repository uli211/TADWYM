/*
TA 3
Dado un archivo HTML, crear un archivo .js que implemente una funcion llamada
removeFromArray(arreglo: Array<any>, item: <any>) que remueva el parametro item
del parametro arreglo e imprima el arreglo usando console.log().
Pueden usarse metodos provistos por JavaScript.
*/

function removeFromArray(arreglo, item) {
  const resultado = arreglo.filter((elemento) => elemento !== item);
  console.log(resultado);
  return resultado;
}

if (typeof document !== "undefined") {
  const formTA3 = document.getElementById("formTA3");
  const inputArreglo = document.getElementById("arreglo");
  const inputItem = document.getElementById("item");
  const resultado = document.getElementById("resultado");

  function convertirValor(valor) {
    const limpio = valor.trim();
    const numero = Number(limpio);
    return limpio !== "" && !Number.isNaN(numero) ? numero : limpio;
  }

  formTA3.addEventListener("submit", (event) => {
    event.preventDefault();
    const arreglo = inputArreglo.value
      .split(",")
      .map(convertirValor)
      .filter((valor) => valor !== "");
    const item = convertirValor(inputItem.value);
    resultado.textContent = JSON.stringify(removeFromArray(arreglo, item));
  });
}
