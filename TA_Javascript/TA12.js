/*
TA 12
Dado un archivo HTML, crear un archivo .js que implemente una funcion llamada
generatePassword(length: int), la cual debe crear una contrasena de largo igual
al parametro length.
La contrasena debe incluir letras mayusculas, minusculas, numeros y simbolos
especiales, tener un largo minimo de 8 caracteres y producir resultados
diferentes al llamarla varias veces.
*/

function generatePassword(length) {
  if (length < 8) {
    console.log("La contrasena debe tener al menos 8 caracteres.");
    return null;
  }

  const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minusculas = "abcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
  const simbolos = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  const todos = mayusculas + minusculas + numeros + simbolos;

  const caracteres = [
    obtenerCaracterAleatorio(mayusculas),
    obtenerCaracterAleatorio(minusculas),
    obtenerCaracterAleatorio(numeros),
    obtenerCaracterAleatorio(simbolos),
  ];

  while (caracteres.length < length) {
    caracteres.push(obtenerCaracterAleatorio(todos));
  }

  const password = mezclarCaracteres(caracteres).join("");
  console.log(password);
  return password;
}

function obtenerCaracterAleatorio(caracteres) {
  const indice = Math.floor(Math.random() * caracteres.length);
  return caracteres[indice];
}

function mezclarCaracteres(caracteres) {
  return caracteres.sort(() => Math.random() - 0.5);
}

if (typeof document !== "undefined") {
  const formTA12 = document.getElementById("formTA12");
  const inputLargo = document.getElementById("largo");
  const resultado = document.getElementById("resultado");

  formTA12.addEventListener("submit", (event) => {
    event.preventDefault();
    const password = generatePassword(Number(inputLargo.value));
    resultado.textContent = password ?? "El largo minimo es 8.";
  });
}
