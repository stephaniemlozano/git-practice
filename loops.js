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
*/
//              0         1       2        3        4         5         6  
const cars = ['Chevy', 'Volvo', 'Saab', 'Ford', 'Ferrari', 'Tesla', 'Nissan']
for(let i = 0; i < cars.length; i++){
    // console.log only high end cars
    if(i >= 4 && i < 6){
        console.log('here are high end cars - ', cars[i])
    }
    //console.log('Check out my car', cars[i])
}

