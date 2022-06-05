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

console.log('Welcome to Node CLI Calculator App')
console.log('')

const prompt = require('prompt-sync')()
const name = prompt('What is your name?')
console.log(`Oh hey, ${name}!`)

const operation = prompt('Do you want to Add, Subtract, Multiply or Divide?')
console.log(`We can do that, ${name}! Let's ${operation}!`)

const firstNumber = prompt(`What is the first number you want to ${operation}?`)
const secondNumber = prompt(`What is the second number you want to ${operation}?`)


function addOperation(x, y) {
  return x + y
}

if (operation === 'Add') {
  console.log(
    `The answer is `,
    addOperation(Number(firstNumber), Number(secondNumber))
  )
}

function subtractOperation(x, y) {
  return x - y
}

if (operation === 'Subtract') {
  console.log(
    `The answer is `,
    subtractOperation(Number(firstNumber), Number(secondNumber))
  )
}

function multiplyOperation(x, y) {
  return x * y
}
if (operation === 'Multiply') {
  console.log(
    `The answer is `,
    multiplyOperation(Number(firstNumber), Number(secondNumber))
  )
}

function divideOperation(x, y) {
  return x / y
}
if (operation === 'Divide') {
  console.log(
    `The answer is `,
    divideOperation(Number(firstNumber), Number(secondNumber))
  )
}

const runAgainOrExit = prompt('Do you want to continue? Yes or No?')
const operationRepromt = prompt('Ok, what do you want to do?')
const runAgain = 'Yes'


if (runAgainOrExit === runAgain) {
  console.log(operationRepromt)
} else {
  console.log(`Ok. Let's calculate again soon, ${name}.`)
}







// if (operationRepromt == 'Add') {
//   console.log(
//     `The answer is `,
//     addOperation(Number(firstNumber), Number(secondNumber))
//   )
// } else if (operationRepromt == 'Subtract') {
//   console.log(
//     `The answer is `,
//     subtractOperation(Number(firstNumber), Number(secondNumber))
//   )
// } else if (operationRepromt == 'Multiply') {
//   console.log(
//     `The answer is `,
//     multiplyOperation(Number(firstNumber), Number(secondNumber))
//   )
// } else if (operationRepromt == 'Divide') {
//   console.log(
//     `The answer is `,
//     divideOperation(Number(firstNumber), Number(secondNumber))
//   )
// }
