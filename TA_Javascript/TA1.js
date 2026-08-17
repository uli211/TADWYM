/*
TA 1
Dado un archivo HTML, crear un archivo .js que implemente una funcion llamada
repeatString(texto: string, repeticiones: int), que utilizando un loop imprima
el parametro texto tantas veces como el parametro repeticiones indique.
La impresion puede hacerse usando console.log(texto).
*/

function repeatString(texto, repeticiones) {
  const resultado = [];

  for (let i = 0; i < repeticiones; i++) {
    console.log(texto);
    resultado.push(texto);
  }

  return resultado;
}

if (typeof document !== "undefined") {
  const formTA1 = document.getElementById("formTA1");
  const inputTexto = document.getElementById("texto");
  const inputRepeticiones = document.getElementById("repeticiones");
  const resultado = document.getElementById("resultado");

  formTA1.addEventListener("submit", (event) => {
    event.preventDefault();
    const lineas = repeatString(inputTexto.value, Number(inputRepeticiones.value));
    resultado.textContent = lineas.join("\n");
  });
}
