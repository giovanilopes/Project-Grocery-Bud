"use strict";

//linkando o ID userInput
const userInput = document.getElementById("userInput");

//linkando o ID formulario
let formulario = document.getElementById("formulario");

//adicionando uma array vazia
let array = [];

//fazendo uma funcao que, ao clicar, adicione o valor que foi escrito ao array e mostre embaixo do input
formulario.addEventListener("submit", function (e) {
  array.push(userInput.value);
  e.preventDefault();

  if (array[0]) {
    document.getElementById("listStyleTest").innerHTML = array[0];
    document.getElementById("button-style").style.display = "block";
  }
  if (array[1]) {
    document.getElementById("listStyleTest2").innerHTML = array[0];
    document.getElementById("button-style2").style.display = "block";
  }
  if (array[2]) {
    document.getElementById("listStyleTest3").innerHTML = array[0];
    document.getElementById("button-style3").style.display = "block";
  }
  if (array[3]) {
    document.getElementById("listStyleTest4").innerHTML = array[0];
    document.getElementById("button-style4").style.display = "block";
  }
  if (array[4]) {
    document.getElementById("listStyleTest5").innerHTML = array[0];
    document.getElementById("button-style5").style.display = "block";
  }
});
