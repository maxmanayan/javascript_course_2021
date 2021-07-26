"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "6:30pm",
    address,
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} by ${time}`
    );
  },
};

// // LESSON 102 - Destructuring Arrays

// const arr = [2, 3, 4];
// // Classic way
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];

// // Destructuring
// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variables
// // Classic way
// // let temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // Destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Destructuring from function result
// // Receive 2 return variables from a function
// const [starterCourse, mainCourse] = restaurant.order(2, 0);
// console.log(starterCourse, mainCourse);

// // Destructuring nested array
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// Lesson 104 - Destructuring Objects

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Renaming object values
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
console.log(a, b);
const obj = { a: 23, b: 33, c: 91 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open, close },
} = restaurant.openingHours;
console.log(open, close);

restaurant.orderDelivery({
  time: "6:00pm",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 2,
});
