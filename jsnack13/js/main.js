//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

var num1 = parseInt(prompt("Inserisci il primo numero"));
var num2 = parseInt(prompt("inserisci il secondo numero"));

if ( num1 > num2){
  console.log("Num 1 è il più grande");
} else  if (num2 > num1){
  console.log("Num 2 è il più grande");
} else{
  console.log("I numeri pari");
}