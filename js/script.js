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

// ma va applicato uno sconto del

// 20% per i minorenni e del

// 40% per gli over 65.
if (anni < 18) {
  var biglietto = ((chilometri * prezzo) *80) / 100;
} else if (anni > 65) {
  var biglietto = ((chilometri * prezzo) *60) / 100;
} else if (anni > 18 && anni < 65) {
  var biglietto = (chilometri * prezzo);
}


document.getElementById("biglietto").innerHTML = biglietto;
