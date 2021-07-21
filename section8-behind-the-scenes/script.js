"use strict";

// function calcAge(birthYear) {
//   const age = 2021 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}!`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;

//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = "Jin";

//       // Reassigning outer scope's variable
//       output = "NEW OUTPUT!!!";

//       const str = `Oh, and you're a millenial, ${firstName}!`;
//       console.log(str);
//     }

//     console.log(millenial);
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = "Max";
// calcAge(1996);

// Lesson 95

console.log(me);
// console.log(job);
// console.log(year);

var me = "Max";
let job = "engineer";
const year = 1991;

// Functions

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Hoisting Pitfall Example
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
