/*
TA 6
Dado un archivo HTML, crear un archivo .js que implemente 2 funciones llamadas
convertToCelsius(temp: int) y convertToFahrenheit(temp: int), que hagan la
conversion de Celsius a Fahrenheit y viceversa, e impriman los resultados en
consola.
El resultado debe estar redondeado a un valor decimal.
*/

function convertToCelsius(temp) {
  const resultado = Number((((temp - 32) * 5) / 9).toFixed(1));
  console.log(resultado);
  return resultado;
}

function convertToFahrenheit(temp) {
  const resultado = Number(((temp * 9) / 5 + 32).toFixed(1));
  console.log(resultado);
  return resultado;
}

if (typeof document !== "undefined") {
  const formTA6 = document.getElementById("formTA6");
  const inputTemperatura = document.getElementById("temperatura");
  const selectConversion = document.getElementById("conversion");
  const resultado = document.getElementById("resultado");

  formTA6.addEventListener("submit", (event) => {
    event.preventDefault();
    const temperatura = Number(inputTemperatura.value);

    if (selectConversion.value === "celsius") {
      resultado.textContent = `${convertToCelsius(temperatura)} C`;
    } else {
      resultado.textContent = `${convertToFahrenheit(temperatura)} F`;
    }
  });
}
