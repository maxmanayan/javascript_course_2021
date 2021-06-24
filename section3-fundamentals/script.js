// // LESSON 32 - Strict Mode
// strict mode can catch errors and give warnings
'use strict';

// let hasDriversLicense = false
// let passedTest = true 
// if (passedTest) hasDriversLicense = true 
// if (hasDriversLicense) console.log('I have a drivers license.')

// // LESSON 33 - Intro to Functions
// function logger() {
//   console.log('My name is Max')
// }

// logger()

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//   return juice
// }

// const fruitJuice = fruitProcessor(5, 3)
// console.log(fruitJuice)


// // LESSON 34 - Function Declarations vs. Function Expressions
// // function declaration
// function calcAge1(birthYear) {
//   return 2021 - birthYear
// }

// console.log(calcAge1(1997))

// // function expression (anonymous function)
// const calcAge2 = function (birthYear) {
//   return 2021 - birthYear
// }

// console.log(calcAge2(1985))

// // LESSON 35 - Arrow functions
// // arrow function
// const calcAge3 = birthYear => 2021 - birthYear

// console.log(calcAge3(1970))

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2021 - birthYear
//   const retirement = 65 - age
//   return `${firstName} retires in ${retirement} years.`
// }

// console.log(yearsUntilRetirement(1997, 'Max'))

// // LESSON 36 - Calling a function with another function
// function cutFruitPieces(fruit) {
//   return fruit * 4
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples)
//   const orangePieces = cutFruitPieces(oranges)
//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`
//   return juice
// }

// console.log(fruitProcessor(3,4))

// // LESSON 37 - Reviewing Functions
// const calcAge = function(birthYear) {
//   return 2021 - birthYear
// }

// const yearsUntilRetirement = function(birthYear, firstName) {
//   const age = calcAge(birthYear)
//   const retirement = 65 - age

//   if (retirement > 0) {
//     return `${firstName} retires in ${retirement} years.`
//   } else {
//     return `${firstName} retired ${retirement * -1} years ago.`
//   }
// }

// console.log(yearsUntilRetirement(1963, 'Dad'))
// console.log(yearsUntilRetirement(1933, 'Grandma'))

// // Lesson 38 - Coding Challenge #1

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

// const checkWinner = function(avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`
//   } else if (avgKoalas >= avgDolphins * 2) {
//     return `Koalas win (${avgKoalas} vs. ${avgDolphins})`
//   } else {
//     return 'No team wins...'
//   }
// }

// const avgDolphins = calcAverage(44, 23, 71)
// const avgKoalas = calcAverage(65, 54, 49)

// // const avgDolphins = calcAverage(85, 54, 41)
// // const avgKoalas = calcAverage(23, 34, 27)

// console.log(checkWinner(avgDolphins, avgKoalas))

// // Lesson 39 - Intro to Arrays
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const yearsExample = new Array(1991, 1984, 2008, 2020)

// console.log(friends[0])
// console.log(friends[2])

// console.log(friends.length)
// console.log(friends[friends.length - 1])

// friends[2] = 'Jay'
// console.log(friends)

// const max = ['Max', 1997, 2021-1997, 'engineer', friends]
// console.log(max)

// // exercise
// function calcAge(birthYear) {
//   return 2021 - birthYear
// }

// const years = [1991, 2002, 1985, 1976, 1950, 1932]

// console.log(calcAge(years[0]))
// console.log(calcAge(years[3]))
// console.log(calcAge(years[5]))

// const ages = [calcAge(years[0]), calcAge(years[3]), calcAge(years[5])]
// console.log(ages)


// // Lesson 40 - Basic Array Operations (Methods)
// const friends = ['Michael', 'Steven', 'Peter'];

// // add elements
// const newLength = friends.push("Jay") // last
// console.log(friends)
// console.log(newLength) // push method returns the new length of an array

// friends.unshift("John") // first
// console.log(friends)

// // remove elements
// const popped = friends.pop() // last
// console.log(friends)
// friends.pop()
// console.log(friends)
// console.log(popped)

// friends.shift() // first
// console.log(friends)

// // find more info about array
// console.log(friends.indexOf('Steven'))
// console.log(friends.indexOf('Bob'))

// console.log(friends.includes('Steven'))
// console.log(friends.includes('Bob'))

// if (friends.includes('Steven')) {
//   console.log('You have a friend named Steven')
// }


// // Lesson 41 - Coding Challenge #2
// const calcTip = function(bill) {
//   let tip = 0
//   if (bill >= 50 && bill <= 300) {
//     return tip = (bill * 0.15)
//   } else {
//     return tip = (bill * 0.2)
//   }
// }

// console.log(calcTip(100))

// const bills = [125, 555, 44]
// console.log(bills)

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// console.log(tips)

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(total)