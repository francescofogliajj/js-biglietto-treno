// Il programma dovrà chiedere all’utente

// il numero di chilometri che vuole percorrere e
var chilometri = prompt("Quanti chilometri vuoi percorrere?");
console.log(chilometri);

// l’età del passeggero.
var anni = prompt("Quanti anni ha il passeggero?");
console.log(anni);

// Sulla base di queste informazioni dovrà

// calcolare il prezzo totale del viaggio.

// Il prezzo del biglietto è definito in base ai
// km (0.21 € al km),
var prezzo = 0.21;
console.log(prezzo);

// ma va applicato uno sconto del

// 20% per i minorenni e del
var scontoMinorenni = 80 / 100;
console.log(scontoMinorenni);

// 40% per gli over 65.
var scontoOver = 60 / 100;
console.log(scontoOver);


if (anni < 18) {
  var biglietto = (chilometri * prezzo) * scontoMinorenni;
} else if (anni > 65) {
  var biglietto = (chilometri * prezzo) * scontoOver;
} else if (anni > 18 && anni < 65) {
  var biglietto = (chilometri * prezzo);
}


document.getElementById("biglietto").innerHTML = biglietto;
