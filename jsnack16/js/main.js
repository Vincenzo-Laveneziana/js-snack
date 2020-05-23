/** 
 * Fai inserire un numero, all’utente, che chiameremo N. Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. 
 Ogni volta che ne crei uno, stampalo a schermo.
*/

var num = parseInt(prompt("inserisci un numero"));


for( var i = 0; i < num; i++){
 
  var array = []
  for(var o = 0; o < 10; o++){             
    array.push(randomNum())
  }
  console.log(array);
}




function randomNum(){
  return Math.floor(Math.random() * 100)+1;
}