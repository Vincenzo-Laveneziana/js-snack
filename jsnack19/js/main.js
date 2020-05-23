/* 
Creare un input che permetta all’utente di inserire un messaggio e aggiungerlo ad una conversazione (tipo whatsapp).
Dopo averlo aggiunto chiedere all’API una frase random (attraverso random/sentence) aggiungendo anch’essa al thread, differenziando i messaggi utente da quelli del computer.
Il tutto utilizzando handlebars
*/

$(document).ready(function (){
  
  //Referenze
  var input = $(".mess-input");
  var btn = $(".mess-btn");
  var chat = $(".chat");
  var msg = input.val().trim();


  //handlebars
  var source = $("#message-template").html();
  //console.log(source);
  var template = Handlebars.compile(source);


  //alla pressione del tasto invio
  input.keyup(function(event){
    msg = input.val().trim();

    if(event.which == 13){
      if(msg !== ""){
        invia();
        setTimeout(risposta, 1000);
      };
      
    };

  });

  //al click inserisco un nuovo msg
  btn.click(function (){
    msg = input.val().trim();

    if(msg !== ""){
      invia();
      setTimeout(risposta, 1000);
    };
    
  });


  function invia (){
    msg = input.val().trim();
    //console.log(msg);
    
    var data = {
      testo: msg,
      ora: "15:39",
      userClass: "sent"
    };

    var html = template(data)
    //console.log(html);

    chat.append(html);
    
    input .val("");
  };

  function risposta(){

    //utilizzo dell'api per la risposta
    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/random/sentence",
      method: "GET",
      success: function (data) {

        var risp = {
          testo: data.response ,  //inserisco la risposta    ritornata dell'api
          ora: "15:39",
          userClass: "received"
        };
      
        var html = template(risp);
        //console.log(html);
  
        chat.append(html);
        
      },
      error: function (){
        console.log("Errore chiamata API");
      }
    })//fine chiamata api

  };


});//fine ready


