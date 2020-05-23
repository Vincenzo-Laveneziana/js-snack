//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

var numero1 = parseInt(prompt("Inserisci un numero"));
console.log(numero1);

var numero2 = parseInt(prompt("Inserisci un numero"));
console.log(numero2);


if (numero1 > numero2){
  alert("Il primo numero è maggiore del secondo");
} else if ( numero1 < numero2){
  alert("Il secondo numero e maggiore del primo");
} else {
  alert("I numeri sono uguali");
}