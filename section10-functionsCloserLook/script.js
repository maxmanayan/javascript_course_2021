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

// // Lesson 131 - Functions Returning Functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// // greeterHey is equal to the function we returned in greet()
// // saves greeting argument as "Hey"
// const greeterHey = greet("Hey");
// greeterHey("Max");
// greeterHey("Jonas");

// greet("Hello")("Brotherman");

// const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);
// greetArrow("Howdy")("Arrow");

// // Lesson 132 - The call and apply Methods
// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(123, "Max Manayan");
// lufthansa.book(239, "Jonas Schmedtmann");

// const eurowings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };

// const book = lufthansa.book;

// // Does not work
// // book(23, "Sarah Marshall");

// // Call Method
// book.call(eurowings, 23, "Sarah Marshall");
// console.log(eurowings);

// book.call(lufthansa, 239, "Mary Cooper");
// console.log(lufthansa);

// const swiss = {
//   airline: "Swiss Air Lines",
//   iataCode: "LX",
//   bookings: [],
// };

// book.call(swiss, 583, "Mary Cooper");

// // Apply Method
// const flightData = [583, "George Cooper"];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(eurowings, ...flightData);

// // Lesson 133 - The bind Method

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, "Steven Williams");

// // partially applying flight number variable
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23("Jonas Schmedtmann");
// bookEW23("Martha Cooper");

// // with Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));
// // by default, the this keyword will apply to the element associated with the handler function (the button)
// // must use bind to manually set this keyword

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23); // same as addVAT = value => value + value * 0.23
// console.log(addVAT(100));
// console.log(addVAT(23));

// const setRate = function (rate) {
//   return function (value) {
//     console.log(value + value * rate);
//   };
// };

// const rate13 = setRate(0.13);
// rate13(100);

// Lesson 134 - Coding Challenge #1
/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
*/

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     let res = Number(
//       prompt(
//         `${this.question}\n${this.options.join("\n")}\n(Write Option Number)`
//       )
//     );
//     if (typeof res === "number" && res >= 0 && res <= 3) {
//       this.answers[res]++;
//       this.displayResults();
//       this.displayResults("string");
//     } else {
//       console.log("Invalid input");
//     }
//   },
//   displayResults(type = "array") {
//     if (type === "array") console.log(this.answers);
//     if (type === "string")
//       console.log(`Poll results are ${this.answers.join(", ")}`);
//   },
// };

// // poll.registerNewAnswer();

// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));

// // Bonus

// poll.displayResults.call({ answers: [5, 2, 3] });
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");

// Lesson 135 - Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
  console.log("This will never run again");
};

runOnce();

// IIFE
(function () {
  console.log("This will REALLY never run again");
  const isPrivate = 23;
})();

// scope of IIFE not accessible from here
// console.log(isPrivate);

(() => console.log("This will ALSO never run again"))();

// can just create a block if you want to limit scope
{
  const isThisPrivate = 33;
  var notPrivate = 91;
}

// console.log(isThisPrivate);
console.log(notPrivate); // var scope is not limited
