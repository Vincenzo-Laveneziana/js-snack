/* 
Creare due div; uno conterrà numeri dispari di colore rosso e l’altro conterrà numeri pari in verde. Ad ogni click di un bottone chiedere all’API un numero, se è dispari metterlo nel blocco dispari, e se è pari in quello pari.
*/

$(document).ready(function () {
  
  var btn = $("button");
  var randomApi = "https://flynn.boolean.careers/exercises/api/random/int";
  var rosso = $(".rosso");
  var verde = $(".verde");



  btn.click(function () {

    
    $.ajax({
      url: randomApi,
      method: "GET",
      success: function (data) {
      
        var number = data.response;
       
        console.log(number);
        
        if (number % 2){
          rosso.append("<span>" + number + "</span>")
        }else{
          verde.append("<span>" + number + "</span>")
        }

      },
      error: function (){
        console.log("Errore chiamata API");
      }
    })//fine chiamata api
  })
  



});
