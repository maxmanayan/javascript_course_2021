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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIng, ...otherIngs) {
    console.log(mainIng);
    console.log(otherIngs);
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

// // Lesson 104 - Destructuring Objects

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // Renaming object values
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// console.log(a, b);
// const obj = { a: 23, b: 33, c: 91 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open, close },
// } = restaurant.openingHours;
// console.log(open, close);

// restaurant.orderDelivery({
//   time: "6:00pm",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: "Via del Sole, 21",
//   starterIndex: 2,
// });

// // Lesson 105 - The Spread Operator (...)

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// // spread operator unpacks array into new array
// const goodNewArr = [1, 2, ...arr];
// console.log(goodNewArr);

// const newMenu = [...restaurant.mainMenu, "Gnocchi"];
// console.log(newMenu);

// // Shallow copy of array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // Join 2 arrays
// const wholeMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(wholeMenu);

// // strings are iterable
// const str = "Max";
// const letters = [...str, " ", "M."];
// console.log(letters);

// // orderPasta()
// const ingredients = [
//   // prompt("Let's make pasta! Ingredient 1?"),
//   // prompt("Ingredient 2?"),
//   // prompt("Ingredient 3?"),
// ];

// console.log(ingredients);

// // Old way
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// // Better way
// restaurant.orderPasta(...ingredients);

// // Shallow Copy of Objects
// const newRestaurant = { founder: "Giovanni", ...restaurant, foundedIn: "1985" };
// console.log(restaurant);
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Ristorante Roma";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// // Lesson 106 - Rest Pattern and Parameters
// // ARRAYS
// // SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// // REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// // we can use both spread and rest in the same line
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // OBJECTS
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // FUNCTIONS
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(2, 3, 7, 2);
// add(2, 3, 7, 2, 6, 8, 11);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza("pepperoni", "mushrooms", "olives", "spinach");
// restaurant.orderPizza("sausage");

// // Lesson 107 - Short Circuiting (&& and ||)

// // Logical Operators can...
// // use ANY data type, return ANY data type, short-circuiting

// // for OR operator (||) - first truthy value is returned (short circuits when first truthy value is met)
// console.log("-------- OR --------");
// console.log(3 || "Jonas");
// console.log("" || "Jonas");
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || "" || "Hello" || 23 || null);

// // restaurant.numGuests = 23;

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// // for AND operator (||) - first falsey value is returned (short circuits when first falsey value is met)
// console.log("-------- AND --------");
// console.log(0 && "Max");
// console.log(7 && "Max");
// console.log(7 && "Max" && null && true);

// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", "spinach");
// }

// restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

// // Lesson 108 - The Nullish Coalescing Operator (??)
// restaurant.numGuests = 0;

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// // Nullish (??): null or undefined (NOT 0 or '')
// // will only short circuit if there is a 0 or undefined met
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

/* 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK 😀
*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];
const [players1, players2] = game.players;
console.log(players1, players2);

// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// 5
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 6
const printGoals = function (...playerNames) {
  console.log(...playerNames, playerNames.length);
};
printGoals(...game.scored);

// 7
team1 < team2 && console.log(`${game.team1} is more likely to win!`);
team1 > team2 && console.log(`${game.team2} is more likely to win!`);
