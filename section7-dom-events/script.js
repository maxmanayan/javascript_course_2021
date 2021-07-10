"use strict";

// console.log(document.querySelector(".message").textContent);

// // changing the HTML message w/ JS
// document.querySelector(".message").textContent = "Correct Number!";

// // changing the HTML number and score w/ JS
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 19;

// console.log(document.querySelector(".guess").value);
// document.querySelector(".guess").value = 23;

document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
});
