/**
 * chiedere un numero all'utente, attraverso una funzione verifichiamo se numero pari o dispari e facciamo tornare true o false alla funzione , utilizziamo il return per fare un output
*/

var numero = parseInt(prompt("Inserisci un numero"));


if( pariDispari(numero) == true){
  
  console.log("Il numero è pari")
} else {
  console.log("il numero è dispari");
  
}

function pariDispari (num){

  if( num % 2 == 0){
    return true;
  }

  return false
}