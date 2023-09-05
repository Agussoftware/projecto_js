let puntos = 0;

function iniciarAventura() {
    alert("Comienza tu aventura.");
    tomarDecision(); 
}

function tomarDecision() {
    const decision = prompt("Elige una opción:\n1. Explorar el bosque.\n2. Entrar en la cueva.\n3. Cruzar el río.");
        if (decision === '1') {
            alert("Te aventuras en el bosque y encuentras un tesoro. ¡Ganas 10 puntos!");
            puntos += 10;
        } else if (decision === '2') {
            alert("Entraste en la cueva y te enfrentaste a un dragón. ¡Perdiste 5 puntos!");
            puntos -= 5;
        } else if (decision === '3') {
            alert("Cruzas el río y encuentras un puente dorado. ¡Ganas 15 puntos!");
            puntos += 15;
        } else {
            alert("Opción no válida. Por favor, elige una opción válida.")
        }

        mostrarPuntos(); 

        const continuar = confirm("¿Quieres seguir tu aventura?");
        if (continuar) {
            tomarDecision();
        } 
        
        else {
            alert(`Fin de la aventura. Tu puntuación final es: ${puntos} puntos.`);
        }
}

function mostrarPuntos() {
    alert(`Tienes ${puntos} puntos.`);
}

iniciarAventura();