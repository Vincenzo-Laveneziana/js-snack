/**
 * Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.
*/


var array = [];
var appoggio = 0;
var go = true;

while(go){
  var numeriUtente =  parseInt(prompt("inserisci un numero"));
  array.push(numeriUtente);
  appoggio += numeriUtente;

  if( appoggio == 50){
    console.log("Hai vinto");
    console.log("NUmeri nell'array" + array);
    go = false;
  } else if( appoggio > 50){
    console.log("Hai perso");
    go = false;

  }
  
}