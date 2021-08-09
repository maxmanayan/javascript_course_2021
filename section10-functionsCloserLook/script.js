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
 