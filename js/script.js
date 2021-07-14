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


//! 1. 
var bombs = [];



//! 2. 
function cpuRandom(){
    var randomNum = Math.floor(Math.random() * 100) + 1;

    return randomNum;
}


//! 3.
while (bombs.length < 16) {
    var randomNumber = cpuRandom();

    if (!bombs.includes(randomNumber)){
        bombs.push(randomNumber); 
    } 
}

console.log('array bombs: ' + bombs);


//! 4. 
function getNumber() {
    var userChoice = parseInt(prompt('Inserisci un numero compreso tra 1 e 100'));

        while (!userChoice || isNaN(userChoice) || userChoice < 1 || userChoice > 100) {
            userChoice = parseInt(prompt('Inserisci un numero compreso tra 1 e 100'));
        }

    console.log('l\'utente ha scelto: ' + userChoice);
    return userChoice;   
}


//! 5.
var userArray = [];


//! 6.
while (userArray.length < 84) {
    var userNumber = getNumber();

    if (bombs.includes(userNumber)){
        alert ('Game over!');
        break;

    } else if (!bombs.includes(userNumber) && !userArray.includes(userNumber)){
        userArray.push(userNumber);
        console.log(userArray);
    } 
} 

console.log('numeri utente: ' + userArray);




