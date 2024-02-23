// Chiedi all'utente la sua email
const email = prompt("Inserisci la tua email:");

// Lista di utenti autorizzati ad accedere
const autorizzati = ["ugo@email.com", "mario@email.com", "peppe@email.com"];

// Controlla se l'email inserita è nella lista di chi può accedere
let autorizzato = false;
for (let i = 0; i < autorizzati.length; i++) {
  if (email === autorizzati[i]) {
    autorizzato = true;
    break;
  }
}

// Stampa un messaggio appropriato sull'esito del controllo
if (autorizzato) {
  console.log("Accesso consentito!");
  document.getElementById('mail').innerHTML = "Accesso consentito!";
  document.getElementById('welcome').innerHTML = 'Bentornato ' + email.split('@')[0] + '!';
  
} else {
  console.log("Accesso negato. Email non autorizzata.");
  document.getElementById('mail').innerHTML = "Accesso negato!";
  
}