// let js = 'amazing';

// console.log(40+35+10);

// let firstName = "Max";
// console.log(firstName);

// let country = "USA"
// let continent = "North America"
// let population = "330 million"

// console.log(`${country}, ${continent}: ${population}`)

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun)

// console.log(typeof true)

// // CHANGING VALUE OF VARIABLE
// javaScriptIsFun = "YES!!!"

// console.log(javaScriptIsFun)

// let age = 24
// age = 25

// const birthYear = 1997

// var job = "teacher"
// job = "programmer"

// // MATH OPERATORS
// const now = 2037;
// const ageMax = now - 1997;
// const ageJin = now - 1996;
// console.log(ageMax, ageJin);

// console.log(ageMax + 2, ageJin / 10, 2 ** 3)

// const firstName = 'Max';
// const lastName = 'Manayan';
// console.log(firstName + ' ' + lastName)

// // ASSIGNMENT OPERATORS
// let x = 10 + 5 // 15
// x += 10 // 25
// x *= 4 //100
// x++ // x = x + 1
// x-- // x = x -1
// console.log(x);

// //COMPARISON OPERATORS
// console.log(ageJin > ageMax)
// console.log(ageJin <= 18)

// const isFullAge = ageJin >= 18


// // CODING CHALLENGE #1 + CODING CHALLENGE #2

// let markMass = 78
// let markHeight = 1.69
// let johnMass = 92
// let johnHeight = 1.95

// let markBMI = markMass / (markHeight * markHeight)
// let johnBMI = johnMass / (johnHeight * johnHeight)

// // console.log(markBMI, johnBMI)

// let markHigherBMI = markBMI > johnBMI
// // console.log(markHigherBMI)

// if (markHigherBMI === true) {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})!`)
// } else {
//   console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})!`)
// }

// markMass = 95
// markHeight = 1.88
// johnMass = 85
// johnHeight = 1.76


// markBMI = markMass / (markHeight * markHeight)
// johnBMI = johnMass / (johnHeight * johnHeight)

// // console.log(markBMI, johnBMI)

// markHigherBMI = markBMI > johnBMI
// // console.log(markHigherBMI)

// if (markHigherBMI === true) {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})!`)
// } else {
//   console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})!`)
// }


// // LESSON 17

// const job = 'engineer'
// const firstName = 'Max'
// const birthYear = 1997
// const year = 2045

// const classicConcat = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '! ';
// console.log(classicConcat)

// const newConcat = `I'm ${firstName}, a ${year-birthYear} year old ${job}!`
// console.log(newConcat)

// console.log('String with \n\
// multiple \n\
// lines')

// console.log(`String with
// multiple
// lines`)


// // LESSON 18

// const legalDrivingAge = 16

// const age = 3

// const canDrive = (age) => {
//   if (age < legalDrivingAge) return `This person ${legalDrivingAge - age} year(s) left until they can drive!`
//   if (age >= legalDrivingAge) return "This person can drive!"
// }

// console.log(canDrive(age))


// const birthYear = 1781;

// const centuryBorn = (birthYear) => {
//   let birthYearArr = birthYear.toString().split('').map(Number)
//   let firstTwoNums = []
//   birthYearArr.forEach((num, i) => {
//     if (i <= 1) {firstTwoNums.push(num)}
//   })
//   let century = `${parseInt(firstTwoNums.join('')) + 1}th Century`
//   return century
// }

// console.log(centuryBorn(birthYear))


// // LESSON 20

// // TYPE CONVERSION  
// const inputYear = '1991' 
// //convert string to number
// console.log(Number(inputYear), inputYear)
// //convert number to string
// console.log(String(23), 23)


// // AUTOMATIC TYPE COERCION
// // only plus converts numbers to strings
// console.log('I am ' + 23 + ' years old')
// // minus, multiply, greater than, etc. converts strings to numbers
// console.log('23' - '10' - 3)


// // LESSON 21

// // 5 falsey values: 0, ' ', undefined, null, NaN

// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean('Max'))
// console.log(Boolean({}))
// console.log(Boolean(''))

// // using in if/else

// const money = 0
// if (money) {
//   console.log("Don't spend it all!")
// } else {
//   console.log("You should get a job!")
// }

// let height
// if (height) {
//   console.log("height is defined")
// } else {
//   console.log("height is undefined")
// }


// // LESSON 22 - EQUALITY OPERATORS

// const age = 18

// // strict equality operator (===) no type coercion, values must be exactly same
// if (age === 18) console.log('You just became an adult! (strict)')

// // loose equality operator (==) performs type coercion
// if (age == '18') console.log('You just became an adult! (loose)')

// const favorite = Number(prompt("What's your favorite number?"))
// console.log(favorite)

// if (favorite === 23) {
//   console.log('Cool! 23 is an amazing number!')
// } else if (favorite === 7) {
//   console.log("7 is also a cool number")
// } else {
//   console.log("That number is alright")
// }


// if (favorite !== 23) {
//   console.log("Why not 23??")
// }


// // LESSON 23-24 - BOOLEAN LOGIC

// const hasDriversLicense = true 
// const hasGoodVision = true
// const isTired = false

// console.log(hasDriversLicense && hasGoodVision)
// console.log(hasDriversLicense || hasGoodVision)
// console.log(!hasDriversLicense)

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive!')
// } else {
//   console.log('Someone else should drive...')
// }

// //  CODING CHALLENGE #3

// // const avgDolphinsScore = (96 + 108 + 89)/3
// // const avgKoalasScore = (88 + 91 + 110)/3
// // const avgDolphinsScore = (97 + 112 + 101)/3
// // const avgKoalasScore = (109 + 95 + 123)/3
// const avgDolphinsScore = (97 + 112 + 101)/3
// const avgKoalasScore = (109 + 95 + 106)/3


// console.log(avgDolphinsScore, avgKoalasScore)

// if (avgDolphinsScore > avgKoalasScore && avgDolphinsScore > 100) {
//   console.log('Dolphins Win!')
// } else if (avgKoalasScore > avgDolphinsScore && avgKoalasScore > 100) {
//   console.log('Koalas Win!') 
// } else if (avgDolphinsScore === avgKoalasScore && avgDolphinsScore > 100) {
//   console.log("It's a draw!")
// } else if (avgDolphinsScore === avgKoalasScore && avgKoalasScore > 100) {
//   console.log("It's a draw!")
// }


// LESSON 26 - SWITCH STATEMENTS

const day = 'wednesday'

switch(day) {
  case 'monday':
    console.log('Plan course structure')
    console.log('Go to coding meetup')
    break
  case 'tuesday':
    console.log('Prepare theory videos')
    break
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples')
    break
  case 'friday':
    console.log('Record videos')
    break
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend')
    break
  default:
    console.log('Not a valid day!')
}


if (day === 'monday') {
  console.log('Plan course structure')
  console.log('Go to coding meetup')
} else if (day === 'tuesday') {
  console.log('Prepare theory videos')
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples')
} else if (day === 'friday') {
  console.log('Record videos')
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend')
} else {
  console.log('Not a valid day!')
}