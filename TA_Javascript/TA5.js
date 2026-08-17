/*
TA 5
Dado un archivo HTML, crear un archivo .js que implemente una funcion llamada
leapYears(anio: int), que imprima en consola true si el parametro anio es un
anio bisiesto y false en caso contrario.
Un anio bisiesto es aquel que es divisible entre 4, excepto si es divisible
entre 100, salvo que tambien sea divisible entre 400.
*/

function leapYears(anio) {
  const esBisiesto = (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
  console.log(esBisiesto);
  return esBisiesto;
}

if (typeof document !== "undefined") {
  const formTA5 = document.getElementById("formTA5");
  const inputAnio = document.getElementById("anio");
  const resultado = document.getElementById("resultado");

  formTA5.addEventListener("submit", (event) => {
    event.preventDefault();
    resultado.textContent = leapYears(Number(inputAnio.value));
  });
}
