/**
 * genera due array random
 * confrontali e popolali in maniera uguale 
*/
var marco = [];
var vincenzo = [];
var differenza = 0;

for (var inps = 0; inps < randomInt(); inps++){
  marco.push(randomInt());
}

for (var inps = 0; inps < randomInt(); inps++){
  vincenzo.push(randomInt());
}

console.log("caramelle marco " + marco.length);
console.log("caramelle vincenzo " +vincenzo.length);

if(marco.length > vincenzo.length){

  differenza = marco.length - vincenzo.length;

  console.log("Marco ha "+ differenza + " caramella di differenza")

  for (var inps2 = 0; inps2 < differenza; inps2++){
    vincenzo.push(randomInt());
  }

  

}else if(vincenzo.length > marco.length){

  differenza = vincenzo.length - marco.length;

  console.log("Vincenzo ha "+ differenza + " caramella di differenza")
  for (var inps2 = 0; inps2 < differenza; inps2++){
    marco.push(randomInt());
  }

  

} else{

  console.log("Se sono uguali è perchè marco ha rubato le caramelle ")

}

//console.log("differenza delle caramelle " + differenza);
//console.log(marco.length);
//console.log(vincenzo.length);




function randomInt(){
  return Math.floor(Math.random() * 10)+1;
}
