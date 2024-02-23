/* ------------- MAIL ------------- */

// Chiedi all'utente la sua email
const email = prompt("Inserisci la tua email (nome@email.com):");

// Lista di utenti autorizzati ad accedere
const autorizzati = ["ugo@email.com", "mario@email.com", "peppe@email.com", "matteo@email.com", "michele@email.com", "nicola@email.com", "stefano@email.com", "paolo@email.com", "fabiola@email.com"];

// Controlla se l'email inserita è nella lista di chi può accedere
let autorizzato = false;

for (let i = 0; i < autorizzati.length; i++) {
  
  if (email === autorizzati[i]) {

    autorizzato = true;

  }
}

// Stampa un messaggio appropriato sull'esito del controllo
if (autorizzato) {
  
  document.getElementById('mail').innerHTML = "Accesso consentito!";
  
  document.getElementById('welcome').innerHTML = 'Benvenuto ' + email.split('@')[0] + '!';
  
  /* ------------- DADI ------------- */
  document.getElementById('btn').addEventListener('click', function(){
  
    // Genera un numero random da 1 a 6 per il giocatore e il computer
    const giocatore = Math.floor(Math.random() * 6) + 1;
    const computer = Math.floor(Math.random() * 6) + 1;

    // Stampa il punteggio del giocatore e del computer
    document.getElementById('giocatore').innerHTML = 'Punteggio giocatore: ' + giocatore;
    document.getElementById('computer').innerHTML = 'Punteggio computer: ' + computer;


    // Stabilisce il vincitore, in base a chi fa il punteggio più alto
    if (giocatore > computer) {

      document.getElementById('vincitore').innerHTML = "Il giocatore ha vinto!";
  
    } else if (giocatore < computer) {
    
      document.getElementById('vincitore').innerHTML = "Il computer ha vinto!";

    } else {
    
      document.getElementById('vincitore').innerHTML = "Pareggio!";
    
    }
  
  })

  // Accesso negato = nessun accesso al gioco
} else {

  document.getElementById('mail').innerHTML = "Accesso negato!";

  document.getElementById('btn').style = "display: none";

}