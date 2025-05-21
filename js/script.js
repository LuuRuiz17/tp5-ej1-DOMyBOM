/* 1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio
que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón 
enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino 
indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero. */

function generarNumero() {
    numeroMagico = Math.floor(Math.random() * 100) + 1;
    const oculto = document.getElementById("oculto");
    const btnComenzar = document.getElementById("btnComenzar");
    const mensajeVictoria = document.getElementById("mensajeVictoria");
    const intentoNumero = document.getElementById("intentoNumero");
    const numeroAleatorio = document.getElementById("numeroAleatorio");

    oculto.classList.remove("d-none");
    btnComenzar.classList.add("d-none");
    mensajeVictoria.classList.add("d-none");
    intentoNumero.value = "";
    numeroAleatorio.classList.add("d-none");
    numeroAleatorio.value = "";

  console.log(numeroMagico);
}

function adivinarNumero(e) {
  e.preventDefault();

  const intentoInput = document.getElementById("intentoNumero");
  const intento = parseInt(intentoInput.value);
  const inputAleatorio = document.getElementById("numeroAleatorio");
  const mensajeVictoria = document.getElementById("mensajeVictoria");
  const btnComenzar = document.getElementById("btnComenzar");

  if (isNaN(intento)) {
    alert("Por favor, ingresa un número válido.");
  }

  if (intento === numeroMagico) {

    inputAleatorio.value = numeroMagico;
    inputAleatorio.classList.remove("d-none");
    mensajeVictoria.classList.remove("d-none");
    btnComenzar.textContent = "Intentar de nuevo";
    btnComenzar.classList.remove("d-none");
    btnComenzar.classList.add("mb-3");
    
  } else if (intento < numeroMagico) {
    alert("El número mágico es mayor que el que ingresaste.");
  } else {
    alert("El número mágico es menor que el que ingresaste.");
  }

  intentoInput.value = "";
}

    let numeroMagico = 0;
    const form = document.querySelector("form");
    form.addEventListener("submit", adivinarNumero);
