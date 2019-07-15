/* ESERCIZIO:
Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri
che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali
dei numeri da indovinare sono stati individuati. */



// Creo array vuoto per salvare i numeri casuali generati
var arrayNumRandom = [];

// Creo array vuoto per salvare i numeri utente
var arryNumUtente = [];


// Creo 5 numeri casuali da 1 a 100 e li mostro con un alert
for (var i = 0; i < 5; i++) {
  var numRandom = Math.floor(Math.random() * 100 + 1);
  arrayNumRandom.push(numRandom);
}
console.log("Numeri casuali generati: " , arrayNumRandom);
alert(arrayNumRandom + "\nAvrai 30 secondi per pensare appena chiuderai questa finistra");


// chiedo all'utente di inserire i numeri
for (var i = 0; i < 5; i++) {
  var numeriUtente = parseInt(prompt("Adesso inserisci, uno alla volta, i numeri che hai visto poco fa"));
  arryNumUtente.push(numeriUtente)
}
console.log("Numeri inseriti dall'utente: " , arryNumUtente);


// confronto i numeri casuali con quelli inseriti dall'utente
var cont = 0;
for (var i = 0; i < arrayNumRandom.length; i++) {

  if (arryNumUtente.includes(arrayNumRandom[i])) {
    console.log("numero ricordato: " + arryNumUtente[i]);
    cont++;
  }
}

// Stampo quanti e quali numeri sono stati individuati
console.log("numeri ricordati: " + cont);


// Partenza del timer di 30 secondi
// setTimeout(ricordaNumeri, 3000);
//
// function ricordaNumeri() {
//   // Chiedo all'utente di inserire i numeri visti con un prompt alla volta
//   for (var i = 0; i < 5; i++) {
//     var numeriUtente = parseInt(prompt("Adesso inserisci, uno alla volta, i numeri che hai visto poco fa"));
//     arryNumUtente.push(numeriUtente)
//   }
//   console.log("Numeri inseriti dall'utente: " , arryNumUtente);
//   return arryNumUtente;
// }
