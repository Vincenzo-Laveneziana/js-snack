/**
 * Generatore di “nomi cognomi” casuali: prendendo una lista di nomi (‘Michele’, ‘Fabio’, ‘Roberto’) e una lista di * cognomi (‘Forghieri’, ‘Papagni’, ‘Marazzini’), Gatsby vuole generare una falsa lista di 5 invitati.
*/

var nomi = ["Michele", "Fabio", "Roberto", "Vincenzo", "Gino", "Luca"];
var cognomi = ["Forghieri", "Papagni", "Marazzini", "Laveneziana", "Bevi l'acqua", "Sputa fuoco"];

for(var i = 0; i <= nomi.length; i++){

  var randomN = Math.floor(Math.random() * nomi.length)
  console.log(randomN);
}
  