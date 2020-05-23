//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby (Michele, Fabio, Lorenzo), chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


var nomi = ["Michele", "Fabio", "Lorenzo"];

var tuoNome = prompt("inserisci il tuo nome").trim();

var capitalizzare = tuoNome.charAt(0).toUpperCase() + tuoNome.slice(1);
console.log(capitalizzare);

var boolean = false;

for( var i = 0; i < nomi.length; i++){

  if( capitalizzare == nomi[i]){
    boolean = true;
  } 
  
}

if (boolean == true){
  console.log("Puoi entrare");
} else{
  console.log("Statti a casa");
}