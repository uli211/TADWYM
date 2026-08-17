/*
TA 11
Dado un archivo HTML, crear un archivo .js que implemente una funcion llamada
duplicates(nums: Array<int>) que calcule la cantidad de elementos repetidos
dentro del parametro nums y la imprima en consola.
Ejemplo: [1, 2, 2, 3, 4, 4, 4, 5] deberia devolver 2, ya que el 2 y el 4 estan
duplicados.
*/

function duplicates(nums) {
  const repetidos = nums.filter((num, index) => nums.indexOf(num) !== index);
  const cantidad = new Set(repetidos).size;
  console.log(cantidad);
  return cantidad;
}

if (typeof document !== "undefined") {
  const formTA11 = document.getElementById("formTA11");
  const inputNumeros = document.getElementById("numeros");
  const resultado = document.getElementById("resultado");

  formTA11.addEventListener("submit", (event) => {
    event.preventDefault();
    const numeros = inputNumeros.value
      .split(",")
      .map((num) => Number(num.trim()))
      .filter((num) => !Number.isNaN(num));
    resultado.textContent = duplicates(numeros);
  });
}
