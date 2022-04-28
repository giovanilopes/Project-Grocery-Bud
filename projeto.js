"use strict";

const userInput = document.getElementById("userInput");

let formulario = document.getElementById("formulario");

if ((userList1 = "")) {
  formulario.addEventListener("submit", function (e) {
    document.getElementById("userList1").innerHTML = userInput.value;
    e.preventDefault();
  });
} else if ((userList2 = "")) {
  formulario.addEventListener("submit", function (e) {
    document.getElementById("userList2").innerHTML = userInput.value;
    e.preventDefault();
  });
} else if ((userList3 = "")) {
  formulario.addEventListener("submit", function (e) {
    document.getElementById("userList3").innerHTML = userInput.value;
    e.preventDefault();
  });
} else if ((userList4 = "")) {
  formulario.addEventListener("submit", function (e) {
    document.getElementById("userList4").innerHTML = userInput.value;
    e.preventDefault();
  });
} else {
  formulario.addEventListener("submit", function (e) {
    document.getElementById("userList5").innerHTML = userInput.value;
    e.preventDefault();
  });
}
