// strict mode can catch errors and give warnings
'use strict';

// let hasDriversLicense = false
// let passedTest = true 
// if (passedTest) hasDriversLicense = true 
// if (hasDriversLicense) console.log('I have a drivers license.')

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

