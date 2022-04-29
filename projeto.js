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
    document.getElementById("userList1").innerHTML = array[0];
  }
  if (array[1]) {
    document.getElementById("userList2").innerHTML = array[1];
  }
  if (array[2]) {
    document.getElementById("userList3").innerHTML = array[2];
  }
  if (array[3]) {
    document.getElementById("userList4").innerHTML = array[3];
  }
  if (array[4]) {
    document.getElementById("userList5").innerHTML = array[4];
  }
});
