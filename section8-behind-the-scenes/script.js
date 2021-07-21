"use strict";

function calcAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}!`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // Creating NEW variable with same name as outer scope's variable
      const firstName = "Jin";

      // Reassigning outer scope's variable
      output = "NEW OUTPUT!!!";

      const str = `Oh, and you're a millenial, ${firstName}!`;
      console.log(str);
    }

    console.log(millenial);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = "Max";
calcAge(1996);
