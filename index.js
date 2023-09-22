let puntos = 0;

function mostrarPuntos() {
  alert(`Tienes ${puntos} puntos.`);
}

function tirarDados() {
  let dadoUno = Math.floor(Math.random() * 6) + 1;
  let dadoDos = Math.floor(Math.random() * 6) + 1;
  return dadoUno + dadoDos;
}

function tomarDecision() {
  debugger;
  const resultadoTexto = "El resultado de los dados fue";
/*   let puntajes = [5, 10, 15]; */
  let inventario = [];
  while (true) {
    const decision = prompt("Elige una aventura: \nEn cada aventura elegida se tirarán 2 dados.   \n1. Explorar el bosque.\n2. Entrar en la cueva.\n3. Cruzar el río.\n4. Terminar la aventura.");

    if (decision === "1") {
      alert("Te aventuras en un bosque. ");
      let resultado = tirarDados();
      if (resultado > 5) {
        alert(`${resultadoTexto} ${resultado}. Encontraste una soga, ganas 10 puntos.`);
        inventario.push("soga");
        puntos += 10;
      } else {
        let tieneSoga = inventario.includes("soga");
        
        if (tieneSoga) {
            let indice = inventario.indexOf("soga");
            if (indice != -1) {
                inventario.splice(indice, 1);        
            } 
          alert(`${resultadoTexto} ${resultado}. Te caes en un pozo y usas la soga para salvarte`);
        } else {
          alert(`${resultadoTexto} ${resultado}. Te caes en un pozo, pierdes 10 puntos.`);
          puntos -= 10;
        }
      }
    } else if (decision === "2") {
      alert("Entraste en la cueva. ");
      let resultado = tirarDados();
      if (resultado > 5) {
        alert(`${resultadoTexto} ${resultado}. Encontraste una espada, ganas 5 puntos.`);
        inventario.push("espada");
        puntos += 5;
      } else {
        let tieneEspada = inventario.includes("espada");
        if (tieneEspada) {
            let indice = inventario.indexOf("espada");
            if (indice != -1) {
                inventario.splice(indice, 1);        
            }
          alert(`${resultadoTexto} ${resultado}. Te enfrentaste a un dragón y usas la espada para salvarte`);
        } else {
          alert(`${resultadoTexto} ${resultado}. Te enfrentaste a un dragón. ¡Perdiste 5 puntos!.`);
          puntos -= 5;
        }
      }
    } else if (decision === "3") {
      alert("Cruzas un río. ");
      let resultado = tirarDados();
      if (resultado > 5) {
        alert(`${resultadoTexto} ${resultado}. Encuentras un botiquín. ¡Ganas 15 puntos!`);
        inventario.push("botiquín");
        puntos += 15;
      } else {
        let tieneBotiquin = inventario.includes("botiquín");
        if (tieneBotiquin) {
            let indice = inventario.indexOf("botiquín");
            if (indice != -1) {
                inventario.splice(indice, 1);        
            }
            alert(`${resultadoTexto} ${resultado}. Estás lleno de sangijuelas pero usas el botiquín para salvarte.`);
        } else {
            alert(`${resultadoTexto} ${resultado}. Estás lleno de sangijuelas y pierdes sangre. ¡Perdiste 15 puntos!.`);
            puntos -= 15;
        }
      }
    } else if (decision === "4") {
      alert(`Fin de la aventura. Tu puntuación final es: ${puntos} puntos.`);
      break;
    } else {
      alert("Opción no válida. Por favor, elige una opción válida.");
    }

    mostrarPuntos();
  }
}
function iniciarAventura() {
  alert("Comienza tu aventura.");
  tomarDecision();
}
iniciarAventura();
