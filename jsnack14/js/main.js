/**
 * Crea due array che hanno un numero di elementi diversi.
  Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.
*/


var array1 = [];
var array2 = [];
var differenza = 0;

for(var i = 0; i < randomNumber(); i++){
  array1.push(randomNumber())
}

console.log(array1);

for(var i = 0; i < randomNumber(); i++){
  array2.push(randomNumber())
}

console.log(array2);


if( array1.length > array2.length){
  differenza = array1.length - array2.length;
  console.log("array 1 ha "+ differenza + " elementi di differenza")

  for( var j = 0;  j < differenza; j++){
    array2.push(randomNumber())
  }

  console.log(array2 + " ora dovrebbero essere uguali array2" );
  console.log(array1 + " array1" );

} else if (array2.length > array1.length){
  differenza = array2.length - array1.length;
  console.log("array 2 ha "+ differenza + " elementi di differenza")

  for( var j = 0;  j < differenza; j++){
    array1.push(randomNumber())
  }
  console.log(array1 + " ora dovrebbero essere uguali array1" );
  console.log(array2 + " array2" );
  
} else{
  console.log("gli array hanno gli stessi elementi");
}





function randomNumber(){
  return Math.floor(Math.random() * 10)+1;
}