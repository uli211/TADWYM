/*
TA 10
Dado un archivo HTML, crear un archivo .js que implemente una funcion llamada
getSum(nums: Array<int>) que calcule la suma de todos los numeros dentro del
parametro nums y la imprima en consola.
No se debe iterar manualmente sobre nums; se deben usar metodos provistos por
JavaScript.
*/

function getSum(nums) {
  const suma = nums.reduce((total, num) => total + num, 0);
  console.log(suma);
  return suma;
}

if (typeof document !== "undefined") {
  const formTA10 = document.getElementById("formTA10");
  const inputNumeros = document.getElementById("numeros");
  const resultado = document.getElementById("resultado");

  formTA10.addEventListener("submit", (event) => {
    event.preventDefault();
    const numeros = inputNumeros.value
      .split(",")
      .map((num) => Number(num.trim()))
      .filter((num) => !Number.isNaN(num));
    resultado.textContent = getSum(numeros);
  });
}
