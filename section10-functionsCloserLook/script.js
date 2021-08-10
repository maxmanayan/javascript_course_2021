"use strict";

// // Lesson 127 - Default Parameters

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // // ES5 Way
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LH123");
// createBooking("LH123", 2, 800);
// createBooking("LH123", 2);
// createBooking("LH123", 5);

// createBooking("LH123", undefined, 1000);

// // Lesson 128 - How PAssing Arguments Works: Value vs. Reference
// const flight = "LH123";
// const max = {
//   name: "Max Manayan",
//   passport: 1234567890,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr. " + passenger.name;

//   if ((passenger.passport = 1234567890)) {
//     alert("Checked in");
//   } else {
//     alert("Wrong passport");
//   }
// };

// checkIn(flight, max);

// console.log(flight);
// console.log(max);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
//   console.log("new passport number", person);
// };

// newPassport(max);
// checkIn(flight, max);

// console.log(flight);
// console.log(max);

// Lesson 129 - First-Class and Higher-Order Functions

// // Lesson 130 - Functions Accepting Callback Functions
// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed String: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// // oneWord and upperFirstWord are callback functions
// transformer("JavaScript is the best language!", oneWord);
// transformer("JavaScript is the best language!", upperFirstWord);

// // JS uses callbacks all the time
// // addEventListener and forEach are higher-order, high5 is callback
// const high5 = function () {
//   console.log("✋");
// };

// document.body.addEventListener("click", high5);

// ["Jonas", "Martha", "Adam"].forEach(high5);

// Lesson 131 - Functions Returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// greeterHey is equal to the function we returned in greet()
// saves greeting argument as "Hey"
const greeterHey = greet("Hey");
greeterHey("Max");
greeterHey("Jonas");

greet("Hello")("Brotherman");

const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArrow("Howdy")("Arrow");
