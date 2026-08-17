/*
TA 9
Dado un archivo HTML, crear un archivo .js que implemente una funcion llamada
getOdds(nums: Array<int>) que filtre e imprima en consola, en un nuevo arreglo,
aquellos numeros dentro del parametro nums que sean impares.
No se debe iterar manualmente sobre nums; se deben usar metodos provistos por
JavaScript.
*/

function getOdds(nums) {
  const impares = nums.filter((num) => num % 2 !== 0);
  console.log(impares);
  return impares;
}

if (typeof document !== "undefined") {
  const formTA9 = document.getElementById("formTA9");
  const inputNumeros = document.getElementById("numeros");
  const resultado = document.getElementById("resultado");

  formTA9.addEventListener("submit", (event) => {
    event.preventDefault();
    const numeros = inputNumeros.value
      .split(",")
      .map((num) => Number(num.trim()))
      .filter((num) => !Number.isNaN(num));
    resultado.textContent = JSON.stringify(getOdds(numeros));
  });
}
