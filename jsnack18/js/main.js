/* 
Chiedere all’API 10 nomi da inserire in un array di invitati.
Una volta generata la lista chiedere all’utente di dire il proprio nome. Se è uno degli invitati ritornare un messaggio di benvenuto, altrimenti di accesso negato.
*/

$(document).ready(function () {
  
  var randomApi = "https://flynn.boolean.careers/exercises/api/random/name";
  var nomiInvitati = [];
  
  for( var i = 0; i < 10; i++ ) {

    $.ajax({
      url: randomApi,
      method: "GET",
      success: function (data) {

        nomiInvitati.push(data.response);
        var nome = data.response;
        $(".container").append("<span>" + nome + "</span>")

        if(nomiInvitati.length == 10){

          var tuoNome = prompt("Inserisci il tuo nome");
          console.log("dentro");
          
          if(nomiInvitati.includes(tuoNome)){
            alert("Benvenuto")
          }else {
            alert("Muori")
          }
        }
        
      },
      error: function (){
        console.log("Errore chiamata API");
      }
    })//fine chiamata api
  }//fine for

  console.log(nomiInvitati);
  
  


  



});
