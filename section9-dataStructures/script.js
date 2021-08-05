"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section

const openingHours = {
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
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // ES6 enhanced object literals
  openingHours,

  // ES6 do not have to write function keyword
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "6:30pm", address }) {
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

// // 1
// // const players1 = [...game.players[0]];
// // const players2 = [...game.players[1]];
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// // 5
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// // 6
// const printGoals = function (...playerNames) {
//   console.log(...playerNames, playerNames.length);
// };
// printGoals(...game.scored);

// // 7
// team1 < team2 && console.log(`${game.team1} is more likely to win!`);
// team1 > team2 && console.log(`${game.team2} is more likely to win!`);

// // Lesson 110 - Looping Arrays: The for-of Loop
// const wholeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of wholeMenu) console.log(item);

// for (const item of wholeMenu.entries()) {
//   console.log(item);
// }

// // can destructure entries() array
// for (const [i, el] of wholeMenu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// // Lesson 112 - Optional Chaining (?.)

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // WITH optional chaining
// // returns early if value before ?. is null or undefined
// console.log(restaurant.openingHours.mon?.open);

// // Example
// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`On ${day}, we open at ${open}! `);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
// console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// // Arrays
// const users = [{ name: "Max", email: "hello@max.io" }];

// // old way
// if (users.length > 0) console.log(users[0].name);
// else console.log("user array empty");

// // with optional chaining and nullish coalescing
// console.log(users[0]?.name ?? "user array empty");

// // Lesson 113 - Looping Objects: Object Keys, Values, and Entries

// // Looping over object KEYS
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// // Looping over VALUES (similar to keys)
// let values = Object.values(openingHours);
// console.log(values);

// // Looping over both KEYS and VALUES (entire object)
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key}, we open at ${open} and close at ${close}!`);
// }

// // Lesson 114 - Coding Challenge #2
// /*
// Let's continue with our football betting app!
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }
// GOOD LUCK 😀
// */

// // 1.
// for (const [i, playerName] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${playerName}`);
// }

// // 2.
// let oddsValues = Object.values(game.odds);

// let average =
//   oddsValues.reduce((acc, cur) => {
//     return acc + cur;
//   }) / oddsValues.length;

// console.log(average);

// // 3.
// let oddsEntries = Object.entries(game.odds);
// console.log(oddsEntries);

// for (const [team, odd] of oddsEntries) {
//   console.log(
//     `Odd of ${game[team] ? `victory ${game[team]}` : "draw"}: ${odd}`
//   );
// }

// // Bonus:
// let scorers = {};

// for (const [i, player] of game.scored.entries()) {
//   if (player in scorers) {
//     scorers[player] += 1;
//   } else {
//     scorers[player] = 1;
//   }
// }

// console.log(scorers);

// // Lesson 115 - Sets
// const ordersSet = new Set([
//   "Risotto",
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Pasta",
//   "Pizza",
// ]);

// console.log(ordersSet);

// console.log(new Set("Maxx"));

// // find size of set
// console.log(ordersSet.size);
// // find if certain element is in set
// console.log(ordersSet.has("Pizza"));
// console.log(ordersSet.has("Bread"));
// // add to a set
// ordersSet.add("Garlic Bread");
// ordersSet.add("Garlic Bread");
// console.log(ordersSet);
// // delete item from set
// ordersSet.delete("Risotto"); // case-sensitive
// console.log(ordersSet);
// // delete all elements in a set
// // ordersSet.clear();
// // console.log(ordersSet);

// // looping over set
// for (const item of ordersSet) console.log(item);

// // Example - really useful when we need unique values from arrays
// const staff = ["Waiter", "Waiter", "Manager", "Host", "Chef", "Chef", "Busboy"];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set("maximillianmanayan").size);

// // Lesson 116 - Maps: Fundamentals
// const eatery = new Map();
// // adding new key/values to map
// eatery.set("name", "Classico Italiano");
// eatery.set(1, "Firenze, Italy");
// console.log(eatery.set(2, "Lisbon, Portugal"));

// // can chain set method

// eatery
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open :D")
//   .set(false, "We are closed :(");

// console.log(eatery);

// console.log(eatery.get("name"));
// console.log(eatery.get(true));
// console.log(eatery.get(1));

// // using boolean keys to check if open
// const time = 15;
// console.log(
//   eatery.get(time > eatery.get("open") && time < eatery.get("close"))
// );

// // more methods on maps
// console.log(eatery.has("categories"));
// eatery.delete(2);
// // eatery.clear();
// const arr = [1, 2];
// eatery.set(arr, "Test");
// eatery.set(document.querySelector("h1"), "Heading");
// console.log(eatery);
// console.log(eatery.size);

// console.log(eatery.get(arr));

// // Lesson 117 - Maps (Iteration)
// // another method of setting maps - nested arrays
// const question = new Map([
//   ["question", "What is the best programming language in the world?"],
//   [1, "C++"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct answer", 3],
//   [true, "Correct!"],
//   [false, "Try again!"],
// ]);
// console.log(question);

// // converting objects to maps - use .entries
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // quiz app
// console.log(question.get("question"));

// for (const [key, value] of question) {
//   if (typeof key === "number") {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// const answer = Number(prompt("Your answer: "));
// console.log(answer);

// console.log(question.get(answer === question.get("correct answer")));

// // convert map to array
// console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

// Lesson 118: Which Data Structure to Use

// Lesson 119: Coding Challenge #3
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// // 1.
// const events = [...new Set([...gameEvents.values()])];
// console.log(events);

// // 2.
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3.
// let eventMinutes = [...gameEvents.keys()];
// let sumOfDifferences = [];
// for (let i = 0; i < eventMinutes.length; i++) {
//   if (eventMinutes[i + 1]) {
//     sumOfDifferences.push(eventMinutes[i + 1] - eventMinutes[i]);
//   }
// }
// const average =
//   sumOfDifferences.reduce((acc, cur) => acc + cur) / eventMinutes.length;
// console.log(`An event happened, on average, every ${average} minutes`);

// // 4.

// for (const [minute, event] of gameEvents) {
//   console.log(
//     `[${minute <= 45 ? "FIRST HALF" : "SECOND HALF"}] ${minute}: ${event}`
//   );
// }

// // Lesson 120 - Working with Strings pt. 1

const airline = "TAP Air Portugal";
const plane = "A320";

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log("B737"[0]);

// console.log(airline.length);
// console.log("B737".length);

// console.log(airline.indexOf("r"));
// console.log(airline.lastIndexOf("r"));
// console.log(airline.indexOf("portugal")); // case sensitive

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf("P")));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   let seatLetter = seat.slice(-1);
//   if (seatLetter === "B" || seatLetter === "E") {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(checkMiddleSeat("11B"));
// console.log(checkMiddleSeat("23C"));
// console.log(checkMiddleSeat("3E"));

// // Lesson 121 - Working with Strings pt. 2

// console.log(airline.toUpperCase());
// console.log(airline.toLowerCase());

// // Fix capitalization in name
// const passenger = "jOnAS";
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing emails
// const email = "hello@jonas.io";
// const loginEmail = "     Hello@Jonas.Io  \n   ";

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // replacing
// const priceGB = "288,97 GBP";
// const priceUS = priceGB.replace("GBP", "USD").replace(",", ".");
// console.log(priceUS);

// const announcement =
//   "All passengers come to boarding door 23. Boarding door 23!";

// console.log(announcement.replace("door", "gate")); // only replaces first 'door'

// console.log(announcement.replaceAll("door", "gate")); // replaces all 'door's

// // regular expressions
// console.log(announcement.replace(/door/g, "gate")); // replaces all 'door's

// // Returns Booleans
// const newPlane = "Airbus A320neo";
// console.log(newPlane.includes("A320"));
// console.log(newPlane.includes("Boeing"));
// console.log(newPlane.startsWith("Air"));

// if (newPlane.startsWith("Airbus") && newPlane.endsWith("neo")) {
//   console.log("Part of the NEW Airbus family!");
// }

// // Practice exercise
// const checkBaggage = function (items) {
//   // no weapons
//   const baggage = items.toLowerCase();
//   if (baggage.includes("gun") || baggage.includes("knife")) {
//     console.log("Items not allowed!");
//   } else {
//     console.log("Looks good!");
//   }
// };

// checkBaggage("I have a laptop, some Food, and a pocket KNife");
// checkBaggage("I have socks and a Camera");
// checkBaggage("I got some snacks and a Gun for Protection");

// Lesson 122 - Working with Strings pt 3
// split() and join()
console.log("a+very+nice+string".split("+"));
console.log("Jonas Schmedtmann".split(" "));

const [firstName, lastName] = "Jonas Schmedtmann".split(" ");
console.log(firstName, lastName);

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalize = function (name) {
  let nameCap = name
    .split(" ")
    .map((n) => `${n[0].toUpperCase()}${n.slice(1)}`)
    .join(" ");

  return nameCap;
};

const passenger = "jessica ann smith davis";

console.log(capitalize(passenger));
console.log(capitalize("max manayan"));

// Padding - padStart() and padEnd()
const message = "Go to Gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "="));

const maskCreditCard = function (number) {
  const str = number + "";
  const maskedNumber = str.slice(-4).padStart(str.length, "*");
  return maskedNumber;
};

console.log(maskCreditCard(1234567891011121));
console.log(maskCreditCard("3235323832353235"));

// Repeat - repeat()
const delayMessage = "Severe Weather ... All Departures Delayed ... ";
console.log(delayMessage.repeat(5));

const planesInQueue = function (n) {
  return `There are ${n} planes waiting to depart ${"✈️".repeat(n)}`;
};

console.log(planesInQueue(3));
console.log(planesInQueue(5));
console.log(planesInQueue(12));
