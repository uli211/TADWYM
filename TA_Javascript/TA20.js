/*
TA 20
Objetivo: Cambiar la imagen al pasar el mouse por encima y volver a la original
al quitarlo.
Colocar una imagen en la pagina.
Usar algun evento para cambiar la imagen a una diferente cuando el mouse pase
por encima.
Usar otro evento para volver a la imagen original cuando el mouse se retire.
*/

const imagen = document.getElementById("imagen");
const imagenOriginal = "../images/pruebaTA13.avif";
const imagenAlternativa = "../images/pruebaTA3.avif";

imagen.addEventListener("mouseenter", () => {
  imagen.src = imagenAlternativa;
});

imagen.addEventListener("mouseleave", () => {
  imagen.src = imagenOriginal;
});
