"use strict";

// console.log(document.querySelector(".message").textContent);

// // changing the HTML message w/ JS
// document.querySelector(".message").textContent = "Correct Number!";

// // changing the HTML number and score w/ JS
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 19;

// console.log(document.querySelector(".guess").value);
// document.querySelector(".guess").value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const updateDOM = (className, content) => {
  document.querySelector(className).textContent = content;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // no input
  if (!guess) {
    updateDOM(".message", "No Number!");

    // when player wins
  } else if (guess === secretNumber) {
    updateDOM(".message", "Correct Number!!!");
    updateDOM(".number", secretNumber);

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      updateDOM(".highscore", highScore);
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      updateDOM(".message", guess > secretNumber ? "Too High!" : "Too Low!");
      score--;
      updateDOM(".score", score);
    } else {
      updateDOM(".message", "Game Over :(");
      updateDOM(".score", 0);
      document.querySelector("body").style.backgroundColor = "darkRed";
    }
  }
  //// when guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too high!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "Game Over :(";
  //     document.querySelector(".score").textContent = 0;
  //     document.querySelector("body").style.backgroundColor = "darkRed";
  //   }

  //   // when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "Game Over :(";
  //     document.querySelector(".score").textContent = 0;
  //     document.querySelector("body").style.backgroundColor = "darkRed";
  //   }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
});
