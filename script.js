// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// Prezzo biglietto standard
const ticketPrice = 0.21;

// Chiedere km da percorrere
const kmToGo = parseInt(prompt('Quanti km devi percorrere?'))
console.log(kmToGo);

// Chiedere età
const age = parseInt(prompt('Quanti anni hai?'))
console.log(age);
// Somma prezzo bilgietto e km

// Output prezzo finale
