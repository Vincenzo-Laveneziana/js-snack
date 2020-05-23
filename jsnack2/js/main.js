//L’utente inserisce due parole in successione, con due prompt. Il software stampa una stringa contenente prima la parola più corta, uno spazio e poi la parola più lunga.

var parola1 = prompt("Inserisci una parola");
console.log(parola1)

var parola2 = prompt("Inserisci una parola");
console.log(parola2)

if ( parola1.length < parola2.length){
  alert("La parola " + parola1 + " è più corta " + parola2)
} else if ( parola1.length > parola2.length){
  alert("La parola " + parola2 + " è più corta " + parola1)
} else {
  alert("La parola " + parola1 + " è uguale alla " + parola2)
}