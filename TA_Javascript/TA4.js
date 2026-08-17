/*
TA 4
Dado un archivo HTML, crear un archivo .js que implemente una funcion llamada
sumAll(a: int, b: int) que calcule la suma de todos los numeros desde el
parametro a al parametro b, incluidos, y lo imprima usando console.log().
*/

function sumAll(a, b) {
  const inicio = Math.min(a, b);
  const fin = Math.max(a, b);
  let suma = 0;

  for (let i = inicio; i <= fin; i++) {
    suma += i;
  }

  console.log(suma);
  return suma;
}

if (typeof document !== "undefined") {
  const formTA4 = document.getElementById("formTA4");
  const inputInicio = document.getElementById("inicio");
  const inputFin = document.getElementById("fin");
  const resultado = document.getElementById("resultado");

  formTA4.addEventListener("submit", (event) => {
    event.preventDefault();
    resultado.textContent = sumAll(Number(inputInicio.value), Number(inputFin.value));
  });
}
