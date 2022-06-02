// Helpful link
// https://www.codecademy.com/article/getting-user-input-in-node-js


// Intro

// Ask for user name

// Ask what a operation they want to complete

// Ask user for first number

// Ask user for second number

// complete operation / display output

// ask user if they want to run again or exit

// exit statement

console.log("Welcome to Node CLI Calculator App")
console.log("")
console.log("Please read the acceptance criteria to get started.")

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
  });

  readline.question('What operation do you want to complete? Addition, substraction, multiplication or division,' , name => '?'); {
    if() {

    }
    readline.close();
  };

  
