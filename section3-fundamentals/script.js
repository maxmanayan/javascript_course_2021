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


// // Lesson 42&43 - Intro to Objects
// const max = {
//   firstName: 'Max',
//   lastName: 'Manayan',
//   age: 24,
//   job: 'engineer',
//   friends: ['Michael', 'Jim', 'Pam']
// }

// console.log(max)

// // dot notation
// console.log(max.firstName)

// // bracket notation
// console.log(max['lastName'])

// const nameKey = 'Name'
// console.log(max['first' + nameKey])
// console.log(max['last' + nameKey])

// const interestedIn = prompt('What do you what to know about Max? Choose between job or age.')

// if (max[interestedIn]) {
//   console.log(max[interestedIn])
// } else {
//   console.log('Invalid request')
// }

// max.location = 'Earth'

// console.log(max)

// // challenge
// // "Max has 3 friends, and his best friend is Michael."
// console.log(`${max.firstName} has ${max.friends.length} friends, and his best friend is ${max.friends[0]}`)


// // Lesson 44 - Object Methods
// const max = {
//   firstName: 'Max',
//   lastName: 'Manayan',
//   birthYear: 1997,
//   job: 'engineer',
//   friends: ['Michael', 'Jim', 'Pam'],
//   hasDriversLicense: true,

//   calcAge: function(birthYear) {
//     return 2021 - birthYear
//   },

//   // uses this keyword, doesn't require parameter to be passed
//   calcAge2: function() {
//     console.log(this)
//     return 2021 - this.birthYear
//   },

//   //sets max.age on first call
//   calcAge3: function() {
//     this.age = 2021 - this.birthYear
//     return this.age
//   },

//   getSummary: function() {
//     return `${this.firstName} is a ${this.age}-year old ${this.job},
//     and he ${this.hasDriversLicense === true ? 'has' : 'does not have'} 
//     a drivers license.`
//   }
// }

// console.log(max.calcAge(max.birthYear))
// console.log(max.calcAge2())
// console.log(max.calcAge3())
// console.log(max.age)

// // challenge
// // "Max is a 21-year old engineer, and he has a drivers license."
//  console.log(max.getSummary())


// // Lesson 45 - Coding Challenge #3
// const john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   mass: 92,
//   height: 1.95,

//   calcBMI: function() {
//     return this.bmi = (this.mass / (this.height ** 2))
//   }
// }

// const mark = {
//   firstName: 'Mark',
//   lastName: 'Miller',
//   mass: 78,
//   height: 1.69,

//   calcBMI: function() {
//     return this.bmi = (this.mass / (this.height ** 2))
//   }
// }

// // console.log('John BMI', john.calcBMI(), 'Mark BMI', mark.calcBMI())

// const higherBMI = (john, mark) => {
//   john.calcBMI()
//   mark.calcBMI()
//   if (john.bmi > mark.bmi) {
//     return `${john.firstName} ${john.lastName}'s BMI (${john.bmi}) is higher than ${mark.firstName} ${mark.lastName}'s (${mark.bmi})!`
//   } else if (john.bmi < mark.bmi) {
//     return `${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi}) is higher than ${john.firstName} ${john.lastName}'s (${john.bmi})!`
//   } else {
//     return 'They have the same BMI!'
//   }
// }

// console.log(higherBMI(john, mark))


// // Lesson 46 - The for loop
// // for(counter, condition - loop will run while condition is true; counter update)
// for(let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`)
// }


// // Lesson 47 - Looping Arrays, Breaking, Continuing
// const maxArray = [
//   'Max',
//   'Mananayan',
//   2021 - 1997,
//   'teacher',
//   ['Michael', 'Jim', 'Pam'],
//   true
// ]

// for(let i = 0; i <= maxArray.length - 1 ; i++) {
//   console.log(maxArray[i], typeof maxArray[i])
// }

// let typeOfArray = []

// for(let i = 0; i <= maxArray.length - 1; i++) {
//   typeOfArray.push(typeof maxArray[i])
// }

// console.log(typeOfArray)

// const years = [1997, 2005, 1969, 2020];
// const ages = []

// for(let i = 0; i <= years.length - 1; i++) {
//   ages.push(2021 - years[i])
// }

// console.log('ages', ages)

// //continue and break
// console.log('Only strings -------')
// for(let i = 0; i <= maxArray.length - 1 ; i++) {
//   if (typeof maxArray[i] !== 'string') continue
//   console.log(maxArray[i], typeof maxArray[i])
// }

// console.log('Break after number is found -------')
// for(let i = 0; i <= maxArray.length - 1 ; i++) {
//   if (typeof maxArray[i] === 'number') break
//   console.log(maxArray[i], typeof maxArray[i])
// }


// // Lesson 48 - Looping over array backwards, and looping within a loop
// const maxArray = [
//   'Max',
//   'Mananayan',
//   2021 - 1997,
//   'teacher',
//   ['Michael', 'Jim', 'Pam'],
// ]

// for (let i = maxArray.length - 1; i >= 0; i--) {
//   console.log(maxArray[i])
// }

// for(let exercise = 1; exercise <= 3; exercise++) {
//   for(let rep = 1; rep <= 5; rep++) {
//     console.log(`Exercise ${exercise} Rep ${rep} Complete!`)
//   }
// }


// // Lesson 49 - The while loop
// for(let rep = 1; rep <= 10; rep++) {
//   console.log(`FOR: Lifting weights repetition ${rep}`)
// }

// let rep = 1
// while(rep <= 10) {
//   console.log(`WHILE: Lifting weights repetition ${rep}`)
//   rep++
// }

// let dice = Math.trunc(Math.random() * 6) + 1
// console.log(dice)

// while(dice < 4) {
//   console.log(`The dice has rolled ${dice}`)
//   dice = Math.trunc(Math.random() * 6) + 1
//   if(dice <= 4) {
//     console.log('Your roll was too high!')
//   }
// }


// // Lesson 50 - Coding Challenge #4
// const bills =[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// let tips = []
// let totals = []

// const calcTip = function(bill) {
//   let tip = 0
//   if (bill >= 50 && bill <= 300) {
//     return tip = (bill * 0.15)
//   } else {
//     return tip = (bill * 0.2)
//   }
// }

// for(let i = 0; i <= bills.length - 1; i++) {
//   tips.push(calcTip(bills[i]))
//   totals.push(bills[i] + tips[i])
// }

// console.log('bills', bills)
// console.log('tips', tips)
// console.log('totals', totals)

// const calcAverage = function(arr) {
//   let sum = arr.reduce((acc, num) => {
//     return acc + num
//   }, 0)
//   return sum / arr.length
// }

// console.log('billsAvg', calcAverage(bills))
// console.log('tipsAvg', calcAverage(tips))
// console.log('totalsAvg', calcAverage(totals))