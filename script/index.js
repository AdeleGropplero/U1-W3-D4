//

/*

TASK:

1) Creare le 90 caselle (div) numerate da 1 a 90

2) Crea un bottone per simulare l'estrazione da 1 a 90 (Math.ceiling?)

3) Dopo il click del bottone il numero uscito deve essere evidenziato in un qualche modo

4) I numeri usciti devono rimanere evidenziati sul tabellone

*/

// 1) quante celle ha questo tabellone? 90
const tabellone = document.getElementById("tabellone");

const createCells = function () {
  for (let i = 0; i < 90; i++) {
    const cellDiv = document.createElement("div");
    cellDiv.classList.add("cell");

    const cellH3 = document.createElement("h3");
    cellH3.innerText = i + 1;

    // inseriamo il singolo h3 e la singola cella creata in ogni loop
    cellDiv.appendChild(cellH3);
    tabellone.appendChild(cellDiv);
  }
};
createCells();

let sortedNumbers = [];

const estraiBtn = function () {
  const button = document.getElementById("estrai");
  button.onclick = function (e) {
    let casualNum = null;

    if (sortedNumbers.includes(casualNum)) {
      do {
        casualNum = Math.ceil(Math.random() * 90);
      } while (sortedNumbers.includes(casualNum));
    }

    console.log(casualNum);
    sortedNumbers.push(casualNum);

    // task 4
    const children = tabellone.querySelectorAll("div");

    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (casualNum === i + 1) {
        child.classList.add("sorted");
      }
    }
    console.log(sortedNumbers);
    /*  if (casualNum !== sortedNumbers[i]) {
        true
    } else {

    }*/
  };
};
estraiBtn();
