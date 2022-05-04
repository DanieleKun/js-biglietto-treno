// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// Prezzo biglietti
const priceKm = 0.21;
const priceUnder = 0.21 * 80 / 100;
const priceOld = 0.21 * 60 / 100;

// Chiedere km da percorrere
const kmToGo = parseInt(prompt('Quanti km devi percorrere?'))
console.log(kmToGo);

// Chiedere età
const age = parseInt(prompt('Quanti anni hai?'))
console.log(age);

// Somma prezzo bilgietto, km e età
let ticketPrice;

if (age < 18) {
    ticketPrice = kmToGo * priceUnder;
    // ticketPrice = ticketPrice.toFixed(2);
    console.log(ticketPrice);
} else if (age >= 65) {
    ticketPrice = kmToGo * priceOld
    // ticketPrice = ticketPrice.toFixed(2);
    console.log(ticketPrice);
} else {
    ticketPrice = kmToGo * priceKm;
    console.log(ticketPrice);
}
ticketPrice = ticketPrice.toFixed(2);

// Output prezzo finale
document.getElementById('ticketprice').innerHTML = 'Il costo del biglietto è di €' + ticketPrice
