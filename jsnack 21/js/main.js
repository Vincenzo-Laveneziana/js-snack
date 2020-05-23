$(document).ready(function () {
  

  
  var squadre = [
    {
      nome: "milan",
      puntiFatti: 0,
      falliSubiti: 0
    },

    {
      nome: "juve",
      puntiFatti: 0,
      falliSubiti: 0
    },

    {
      nome: "inter",
      puntiFatti: 0,
      falliSubiti: 0
    },

    {
      nome: "roma",
      puntiFatti: 0,
      falliSubiti: 0
    }
  ]
 
  for(var i = 0; i < squadre.length; i++){

    squadre[i].puntiFatti = random()
    squadre[i].falliSubiti = random()

    
  }

  console.log(squadre);
  
  

  function random(){
    var random = Math.floor(Math.random()* 10)

    return random;
  }

 
  
});
