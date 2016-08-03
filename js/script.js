
///////// Usuario/////
var user = prompt("Escoge piedra, papel o tijera").toLowerCase();
console.log("user = " + user);
var pc = Math.random();
console.log(pc.toFixed(2));

//////// Selecionando los id del html //////
var h1 = document.getElementById("resultado");
var user_print = document.getElementById("user").innerHTML = "usuario = "+user; //// imprime lo que escribio el usuario//
var pc_print = document.getElementById("pc");

// por clase o por selector
// document.getElemensByClass("");
// document.querySelector("#resultado");

//////////PC seleciona piedra papel tijera//////////
if (pc <= 0.33){
  pc = "pc = piedra";
  pc_print.innerHTML = "pc = piedra";
  console.log("pc = piedra");
}else if (pc >= 0.34 && pc <= 0.66){
  pc = "papel";
  pc_print.innerHTML = "pc = papel";
  console.log("pc = papel");
}else {
  pc = "tijera";
  pc_print.innerHTML = "pc = tijera";
  console.log("pc = tijera");
}
///// Comparacion entre los resultados de cada jugador/////
//Piedra > Tijera
// Tijera > Papel
// Papel > Piedra

//fucnion --> nombredefuncion (elementos,elementos) /////

function compara(element1, element2){
 if( element1 === element2){
    console.log("empate");
    h1.innerHTML = "resultado = empate";
 }else if (element1 === "piedra"){
   if(element2 === "tijera"){
    console.log("piedra gana");
    h1.innerHTML = "resultado = piedra gana";
 }else{
    console.log("papel gana");
    h1.innerHTML = "resultado = papel gana";
  }
}else if (element1 === "tijera"){
  if(element2 === "papel"){
    console.log("tijera gana");
    h1.innerHTML = "resultado = tijera gana";
  }else {
    console.log("piedra gana");}
    h1.innerHTML = "resultado = pidedra gana";
}else if (element1 === "papel"){
  if(element2 === "piedra"){
    console.log("papel gana");
    h1.innerHTML = "resultado = papel gana";
  }else{
    console.log("gana tijera");
    h1.innerHTML = "resultado = tijera gana";
  }
}else{
  console.log("Debes escoger piedra, papel o tijera");
 }
}
compara(user, pc);
