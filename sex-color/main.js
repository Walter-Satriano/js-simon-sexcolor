/* ESERCIZIO:
Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
Sulla pagina html deve apparire “Ciao <nome>“, il colore del nome
deve essere azzurro o rosa a seconda del sesso inserito. */

// Dichiarazione variabili
var nomeUtente, sessoUtente;

// Chiedo all'utente il nome
nomeUtente = prompt("Come ti chiami?");

// Chiedo all'utente il sesso
sessoUtente = prompt("Sei uomo o donna? (Inserisci m o f)");

// Stampo in pagina l'input dell'utente
document.getElementById("username").innerHTML = nomeUtente;


// Se l'utente risponde "m" il colore del nome è azzurro,
if (sessoUtente === "m") {
  document.getElementById("username").style.color = "rgb(6, 230, 255)";

  // altrimenti, se risponde "f" il colore del nome è rosa
} else {
  document.getElementById("username").style.color = "rgb(255, 0, 194)";
}
