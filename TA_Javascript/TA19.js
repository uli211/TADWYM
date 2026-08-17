/*
TA 19
Objetivo: Validar un formulario en tiempo real.
Crear un formulario con campos de texto para nombre, contrasena y correo
electronico.
Anadir un mensaje de error debajo de cada campo que aparezca si los campos estan
vacios, la contrasena tiene menos de 8 caracteres o el correo no es valido.
El formulario no debe enviarse si hay errores.
*/

const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const inputPassword = document.getElementById("password");
const inputCorreo = document.getElementById("correo");
const errorNombre = document.getElementById("errorNombre");
const errorPassword = document.getElementById("errorPassword");
const errorCorreo = document.getElementById("errorCorreo");

function validarNombre() {
  if (inputNombre.value.trim() === "") {
    errorNombre.textContent = "El nombre es obligatorio.";
    return false;
  }

  errorNombre.textContent = "";
  return true;
}

function validarPassword() {
  if (inputPassword.value.trim() === "") {
    errorPassword.textContent = "La contrasena es obligatoria.";
    return false;
  }

  if (inputPassword.value.length < 8) {
    errorPassword.textContent = "La contrasena debe tener al menos 8 caracteres.";
    return false;
  }

  errorPassword.textContent = "";
  return true;
}

function validarCorreo() {
  const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputCorreo.value);

  if (inputCorreo.value.trim() === "") {
    errorCorreo.textContent = "El correo es obligatorio.";
    return false;
  }

  if (!correoValido) {
    errorCorreo.textContent = "El correo no es valido.";
    return false;
  }

  errorCorreo.textContent = "";
  return true;
}

function validarFormulario() {
  const nombreValido = validarNombre();
  const passwordValida = validarPassword();
  const correoValido = validarCorreo();

  return nombreValido && passwordValida && correoValido;
}

inputNombre.addEventListener("input", validarNombre);
inputPassword.addEventListener("input", validarPassword);
inputCorreo.addEventListener("input", validarCorreo);

formulario.addEventListener("submit", (event) => {
  if (!validarFormulario()) {
    event.preventDefault();
  }
});
