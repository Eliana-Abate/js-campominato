/* Il computer deve generare 16 numeri casuali tra 1 e 100, queste saranno le nostre bombe.
I numeri delle bombe non possono essere duplicati (i 16 numeri devono essere tutti diversi)
Il giocatore, deve cercare di non prendere le bombe. Gli chiederemo 100 - 16 volte di scegliere un numero, uno alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire 2 volte lo stesso numero
Ogni  volta che l'utente sceglie un numero che non è presente tra le bombe, guadagna un punto e poi gli chiediamo un altro numero.
Se il numero scelto dall'utente è presente tra i numeri bomba, la partita termina.
Quando la partita termina, comunichiamo all'utente il suo punteggio. */

//TODO 1. Creo array vuoto in cui inserire i 16 numeri generati dal computer
//TODO 2. Creo funzione per far generare i numeri random al computer
// TODO 3. Pongo le condizioni affinché i numeri inseriti nell'array rispettino le seguenti regole: devono essere 16 al max e diversi tra loro.


//! 1. 
var bombs = [];
console.log('array bombs ' + bombs)

var randomBombs = cpuRandom();
console.log('randomBombs ' + randomBombs);

while (randomBombs !== randomBombs && bombs.length < 16) {
    bombs.push(randomBombs);
}





//! 2. 
function cpuRandom(randomNumber){
    randomNumber = Math.floor(Math.random() * 100) + 1;

    for (var i = 0; i < 16; i++) {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log(randomNumber);
    }

    return randomNumber
}

