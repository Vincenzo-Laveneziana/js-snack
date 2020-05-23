

var nome = prompt("Inserisci il nome").trim().toLowerCase();

var cognome = prompt("Inserisci il cognome").trim().toLowerCase();

document.getElementById("paragrafo").innerHTML = "<p> Il mio nome e cognome è " + nome + " " + cognome + "</p>" ;