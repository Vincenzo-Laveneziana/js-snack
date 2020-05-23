//Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

var somma = 0;


///////////////////////////////////ciclo for
/* for( var i =0; i <= 4; i++ ){
  var insnum = parseInt(prompt("Inserisci un numero"));
  somma += insnum;
}
console.log(somma); */


/////////////////////////////////ciclo while
var i = 0;

while( i <= 4 ){
  var insnum = parseInt(prompt("Inserisci un numero"));
  somma += insnum;
  i++;
}
console.log(somma);