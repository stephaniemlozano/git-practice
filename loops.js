//Functions that come free with JS
//if(){}
//switch(){}

// let i = 0 --> initializes the variable
// i < 10 --> is the condition to be checked
// i++ --> this adds 1 to i
/*
for(let i = 0; i < 10; i++){
    console.log('loop is running', i)
}
*/

/*
// cant used const because i is being reassigned every loop
for(let i = 0; i <= 100; i++){
    //step 1 i = 0 then i + 1
    //step 2 i = 1 then i + 1
    //step 3 i = 2 then i + 1 ...
    console.log('just testing', i)
}

//              0         1       2        3        4         5         6  
const cars = ['Chevy', 'Volvo', 'Saab', 'Ford', 'Ferrari', 'Tesla', 'Nissan']
for(let i = 0; i < cars.length; i++){
    // console.log only high end cars
    if(i >= 4 && i < 6){
        console.log('here are high end cars - ', cars[i])
    }
    //console.log('Check out my car', cars[i])
}
*/

//Lab
// 1. Write a loop that outputs;
// 10
// 9
// 8
// ...
// 2
// 1
// BlAST OFF!
/*
for(let i = 11; i <= 11 && i > 1; i--){
    console.log(i-1)
    if(i <= 2){
        console.log('BlAST OFF!')
    }
}
*/

/*
Coding challenge
Name: FizzBuzz
FizzBuzz is a task where the programmer is asked to print numbers from 1 to 30, but here’s the catch…
2. multiple of three should print “Fizz”
3. multiple of five should print “Buzz”
4. and lastly print “FizzBuzz” for multiples of three and five.
Bonus: create a function for this challenge
*/
/*
for (let i = 1; i <= 30; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i, "FizzBuzz")
  } else if (i % 5 == 0) {
    console.log(i, "Buzz")
  } else if (i % 3 == 0) {
    console.log(i, "Fizz")
  } else {
    console.log(i)
  }
}
*/

// Loop On Objects or Arrays - loops through the properties
const person = {
  fname: 'Jon',
  lname: 'doe',
  age: 25,
}

for (let x in person) {
  console.log(x)
}

const numbers = [17, 18, 19, 20]

for (let x in numbers) {
  console.log(numbers[x])
}

//For Of Loop - loops through the values of Arrays (Strings are Arrays)

for (let x of numbers) {
  console.log(x)
}

const language = 'Javascipt'
for (let x of language) {
  console.log(x + ' hey')
}


// While Loop

let y = 0
while (y < 10) {
    y++
    console.log(y)
}


// Do While Loop

let i = 1
do {
    i++
    console.log(i)
} while (i < 10)
