"use strict";

// console.log(document.querySelector(".message").textContent);

// // changing the HTML message w/ JS
// document.querySelector(".message").textContent = "Correct Number!";

// // changing the HTML number and score w/ JS
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 19;

// console.log(document.querySelector(".guess").value);
// document.querySelector(".guess").value = 23;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // no input
  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!!!";

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Game Over :(";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }

    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Game Over :(";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});
