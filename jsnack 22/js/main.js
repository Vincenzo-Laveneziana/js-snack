$(document).ready(function () {
  
  var oggetto = {
    nome: "palla",
    peso: "10"
  }
  
  alert("ora modifichiamo il peso della palla");


  oggetto.peso = parseInt(prompt("inserisci il nuovo peso"))


  console.log(oggetto);
  



});
