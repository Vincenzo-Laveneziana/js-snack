/* 
L’utente inserisce due parole in successione, con due prompt. Il software stampa la parola più lunga. Utilizza una funzione per determinare e ritornare la parola più lunga.
*/

var parola1 = prompt("Inserisci la prima parola").trim().toLowerCase();
var parola2 = prompt("Inserisci la seconda parola").trim().toLowerCase();
var bolean = false;
var parolaPLunga = parolaLunga(parola1,  parola2);

if( parolaPLunga == true){
  console.log("Le parole sono lunge uguali");
} else{
  console.log(parolaPLunga + " è la parola più lunga" );
}


function parolaLunga (word1, word2){

  if(word1.length > word2.length){
    return word1;
  } else if( word1.length < word2.length){
    return word2;
  } 

  return true;

}