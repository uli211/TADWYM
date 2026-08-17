/*
TA 21
Objetivo: Cambiar el estilo de un campo de texto cuando esta enfocado.
Crear un input de texto.
Usar algun evento para cambiar el borde del input a un color mas oscuro cuando
el campo esta activo.
Usar otro evento para restaurar el borde original cuando el campo pierde el foco.
*/

const campoTexto = document.getElementById("campoTexto");
const bordeOriginal = "1px solid #999";

campoTexto.style.border = bordeOriginal;

campoTexto.addEventListener("focus", () => {
  campoTexto.style.border = "2px solid #222";
});

campoTexto.addEventListener("blur", () => {
  campoTexto.style.border = bordeOriginal;
});
