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

// // Lesson 95

// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = "Max";
// let job = "engineer";
// const year = 1991;

// // Functions

// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// // Hoisting Pitfall Example
// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log("All products deleted!");
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// // LESSON 97 - the this keyword
// console.log(this); // Window object

// const calcAge = function (birthYear) {
//   console.log(2021 - birthYear);
//   console.log(this); // undefined
// };

// calcAge(1997);

// const calcAgeArrow = (birthYear) => {
//   console.log(2021 - birthYear);
//   console.log(this); // Window object (lexical this - this of the parent scope)
// };

// calcAgeArrow(1997);

// const Max = {
//   year: 1997,
//   calcAge: function () {
//     console.log(this); // The Max Object
//     console.log(2021 - this.year);
//   },
// };

// Max.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = Max.calcAge;

// matilda.calcAge(); // this = Matilda Object

// const f = Max.calcAge;

// f(); // this = undefined

// // LESSON 98 - Regular Functions vs. Arrow Functions
// const max = {
//   firstName: "Max",
//   year: 1997,
//   calcAge: function () {
//     console.log(this); // The Max Object
//     console.log(2021 - this.year);

//     // // Solution 1
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(this); // undefined
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };
//     // isMillenial();

//     // Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// max.greet(); // Hey undefined
// max.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 5, 4, 7);

// const addArrow = (a, b) => {
//   console.log(arguments);
//   a + b;
// };

// addArrow(2, 5, 4, 7);

// LESSON 99 - Primitives vs. Objects
let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge); // 30

const me = {
  name: "Max",
  age: 24,
};

const friend = me;
friend.name = "Bill";

console.log("Friend: ", friend);
console.log("Me: ", me);
