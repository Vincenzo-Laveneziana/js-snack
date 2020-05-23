$(document).ready(function () {
  

  
  
  var biciCorsa = [
    {
      nome: "bicispider",
      peso: 10
    },

    {
      nome: "bicirossa",
      peso: 5
    },

    {
      nome: "bicifungo",
      peso: 15
    }
  ]


  var biciLeggera = biciCorsa[0];



  for ( var i = 0; i < biciCorsa.length; i++ ) {
  
   if(biciCorsa[i].peso < biciLeggera.peso){
     biciLeggera = biciCorsa[i];
   }
   //console.log(biciLeggera);
  }


  console.log(biciLeggera);
  



});
