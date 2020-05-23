// crea un array vuoto. Chiedi per 6 volte all'utente di inserire un numero.
// se è dispari inserirlo nell'array

var num = [];



for( var i = 0; i < 6; i++){

  var chiediNumero = parseInt(prompt("inserisci un numero"))

  
  if (chiediNumero % 2 !== 0){
    num.push(chiediNumero);
    
  }


}

console.log(num);

