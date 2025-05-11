/* 1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio
que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón 
enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino 
indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero. */

function generarNumero() {
    let random = Math.floor(Math.random() * 100) + 1;
    const input = document.getElementById("numeroAleatorio");
    const divOculto = document.getElementById("oculto");
    const btnComenzar = document.getElementById("btnComenzar");
    btnComenzar.classList.add("d-none");
    divOculto.classList.remove("d-none");
    input.value = random;
    console.log(random);
}


function adivinarNumero() {
    const input = document.getElementById("intentoNumero");
    const intentoNumero = input.value;
    const numeroAleatorio = document.getElementById("numeroAleatorio");
    const mensajeVictoria = document.getElementById("mensajeVictoria");
    if (intentoNumero == numeroAleatorio.value) {
        numeroAleatorio.classList.remove("d-none");
        mensajeVictoria.classList.remove("d-none");
    }
    else{
        if(intentoNumero < numeroAleatorio.value){
            alert("El número mágico es mayor que el que ingresaste.");
            input.value = "";
        }else{
            alert("El número mágico es menor que el que ingresaste.");
            input.value = "";
        }
    }
}
