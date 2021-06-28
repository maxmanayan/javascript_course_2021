// // Remember, we're gonna use strict mode in all scripts now!
// "use strict";

// // Lesson 55 - Installing Prettier and vscode snippets
// const x = 23;

// if (x === 23) console.log("MJ");

// const calcAge = (birthYear) => 2021 - birthYear;

// console.log(calcAge(1993));
// // installed Prettier

// // installed Node JS and Live-Server

// // Lesson 59 - Using Google, Stack Overflow and MDN

// const temperatures = [3, -2, -2, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcAmplitude = function (temperatures) {
//   // // my solution
//   // let sortedTempArray = temperatures.filter((temp) => typeof temp === "number");
//   // // .sort((a, b) => {
//   // //   if (a > b) {
//   // //     return 1;
//   // //   }
//   // //   if (a < b) {
//   // //     return -1;
//   // //   }
//   // //   return 0;
//   // // });

//   // let maxTemp = Math.max(...sortedTempArray);
//   // let minTemp = Math.min(...sortedTempArray);

//   // return maxTemp - minTemp;

//   // jonas' solution
//   let max = temperatures[0];
//   let min = temperatures[0];

//   for (let i = 0; i <= temperatures.length - 1; i++) {
//     let curTemp = temperatures[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   return max - min;
// };

// console.log(calcAmplitude(temperatures));

// let temperatures2 = [1, 20, 4, 5, 7];

// const calcAmplitudeNew = function (temp1, temp2) {
//   // calcAmp with two separate arrays
//   let temperatures = temp1.concat(temp2);
//   let max = temperatures[0];
//   let min = temperatures[0];

//   for (let i = 0; i <= temperatures.length - 1; i++) {
//     let curTemp = temperatures[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   return max - min;
// };

// console.log(calcAmplitudeNew(temperatures, temperatures2));

// // Lesson 61 - Debugging with the Console and Breakpoints

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     // value: Number(prompt("Degree celsius: ")),
//     value: 10,
//   };

//   // console.table(measurement);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

// const temperatures = [3, -2, -2, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// let temperatures2 = [1, 20, 4, 5, 7];

// const calcAmplitudeBug = function (temp1, temp2) {
//   let temperatures = temp1.concat(temp2);
//   let max = temperatures[0];
//   let min = temperatures[0];

//   for (let i = 0; i <= temperatures.length - 1; i++) {
//     let curTemp = temperatures[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   return max - min;
// };

// console.log(calcAmplitudeBug(temperatures, temperatures2));

// // Lesson 62 - Coding Challenge #1

// const temps1 = [17, 21, 23];
// const temps2 = [12, 5, -5, 0, 4];

// const printForecast = function (temps) {
//   forecastArr = [];
//   for (let i = 0; i <= temps.length - 1; i++) {
//     forecastArr.push(`${temps[i]}°C in ${i + 1} ${i === 0 ? "day" : "days"}`);
//   }
//   return `... ${forecastArr.join(" ... ")} ...`;
// };

// console.log(printForecast(temps1));
// console.log(printForecast(temps2));
