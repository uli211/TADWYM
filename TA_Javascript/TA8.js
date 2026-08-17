/*
TA 8
Dado un archivo HTML, crear un archivo .js que implemente una funcion llamada
findTheOldest(people: Array), que devuelva e imprima en consola aquella persona
dentro del parametro people que tenga mas edad.
Se pueden usar metodos provistos por JavaScript.
*/

function findTheOldest(people) {
  const calcularEdad = (person) => {
    const anioFinal = person.yearOfDeath ?? new Date().getFullYear();
    return anioFinal - person.yearOfBirth;
  };

  const personaMayor = people.reduce((mayor, persona) => {
    return calcularEdad(persona) > calcularEdad(mayor) ? persona : mayor;
  });

  console.log(personaMayor);
  return personaMayor;
}

if (typeof document !== "undefined") {
  const formTA8 = document.getElementById("formTA8");
  const textareaPeople = document.getElementById("people");
  const resultado = document.getElementById("resultado");

  formTA8.addEventListener("submit", (event) => {
    event.preventDefault();

    try {
      const people = JSON.parse(textareaPeople.value);
      resultado.textContent = JSON.stringify(findTheOldest(people), null, 2);
    } catch (error) {
      resultado.textContent = "El JSON ingresado no es valido.";
    }
  });
}
