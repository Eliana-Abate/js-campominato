/* Il computer deve generare 16 numeri casuali tra 1 e 100, queste saranno le nostre bombe.
I numeri delle bombe non possono essere duplicati (i 16 numeri devono essere tutti diversi)
Il giocatore, deve cercare di non prendere le bombe. Gli chiederemo 100 - 16 volte di scegliere un numero, uno alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire 2 volte lo stesso numero
Ogni  volta che l'utente sceglie un numero che non è presente tra le bombe, guadagna un punto e poi gli chiediamo un altro numero.
Se il numero scelto dall'utente è presente tra i numeri bomba, la partita termina.
Quando la partita termina, comunichiamo all'utente il suo punteggio. */

//TODO 1. Creo array vuoto in cui inserire i 16 numeri generati dal computer
//TODO 2. Creo funzione per far generare i numeri random al computer
//TODO 3. Pongo le condizioni affinché i numeri inseriti nell'array rispettino le seguenti regole: devono essere 16 al max e diversi tra loro.
//TODO 4. Creo funzione per chiedere il numero al giocatore
//TODO 5. Creo array per inserire i numeri scelti dal giocatore
//TODO 6. Pongo la condizione di chiedere il numero finché non perde (= il suo numero è presente nell'Array 'Bombs') e finché non mi dà un numero diverso dai precedenti (= il numero scritto non è già presente nellàarray dell'utente)
//TODO 7. Faccio un ciclo FOR per l'array dell'utente, in modo tale che per ogni elemento [i] dell'array venga assegnato il valore di 1 punto.
    // 7.1. ALTERNATIVA AL CICLO FOR
//TODO 8. BONUS: 
/*BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
*/
//TODO 9. Aggiungo variabili per definire i numeri di ogni livello
//TODO 10. Chiedo all'utente di scegliere il livello
//TODO 11. Faccio validazione del livello scelto
//TODO 12. Creo SWITCH per variare il valore della variabile 'totalNumber' a seconda del livello di difficoltà scelto

//TODO 13. Stampo in pagina



//! 1.  +  9.
var totalNumber;
var totalBombs = 16;


var bombs = [];

//! 10.
var level = prompt('Scegli il livello di difficoltà: "facile", "medio", "difficile".');
var difficultyLevel = ['facile', 'medio', 'difficile'];

//! 11. 
while (!level || !difficultyLevel.includes(level.toLowerCase().trim())){
    level = prompt('Scegli il livello di difficoltà: "facile", "medio", "difficile".');
}


//! 12. 
switch (level.toLowerCase().trim()) {
    case 'facile':
        totalNumber = 100;
        break;
    case 'medio':
        totalNumber = 80;
        break;
    case 'difficile':
        totalNumber = 50;
        break;    
}


var totalChoices = totalNumber - totalBombs;




//! 2. 
function cpuRandom(){
    var randomNum = Math.floor(Math.random() * totalNumber) + 1;

    return randomNum;
}


//! 3.
while (bombs.length < totalBombs) {
    var randomNumber = cpuRandom();

    if (!bombs.includes(randomNumber)){
        bombs.push(randomNumber); 
    } 
}

console.log('array bombs: ' + bombs);




//! 4. 
function getNumber() {
    var userChoice = parseInt(prompt('Inserisci un numero compreso tra 1 e ' + totalNumber));

        while (!userChoice || isNaN(userChoice) || userChoice < 1 || userChoice > totalNumber) {
            userChoice = parseInt(prompt('Inserisci un numero compreso tra 1 e ' + totalNumber));
        }

    console.log('l\'utente ha scelto: ' + userChoice);
    return userChoice;   
}


//! 5.
var userArray = [];



//! 6.
while (userArray.length < totalChoices) {
    var userNumber = getNumber();

    if (bombs.includes(userNumber)){
        alert ('Game over!');
        break;

    } else if (!bombs.includes(userNumber) && !userArray.includes(userNumber)){
        userArray.push(userNumber);
        console.log(userArray);
    } 
} 

console.log('Numeri scelti dall\'utente: ' + userArray);

//! 7. 
var score = 0;

for (var i = 0; i < userArray.length; i++) {
    var point = 1;
    userArray[i] = point;
    score = point * userArray.length;
}

console.log('Punteggio totalizzato: ' + score);


// 7.1. ALTERNATIVA 
/* Poiché il punteggio da assegnare è di 1 per ogni elemento di 'userArray' potrei semplicemente scrivere che: 
    
     var score = userArray.length;
*/


//! 13. PRINT IN HTML
var displayScore = document.getElementById('score-result');
displayScore.innerHTML = 'Hai totalizzato un punteggio di ' + score + ' su ' + totalChoices;

var displayWinner = document.getElementById('win-lost');

if (score == totalNumber) {
    displayWinner.innerHTML = 'Complimenti! Hai vinto!'
} else {
    displayWinner.innerHTML = 'Hai perso! Ritenta e sarai più fortunato!'
}