// Declaring with the function keyword
function hi() { // Try to avoid function
  console.log('Say Hello');
}

hi();

// arrow functions
const arrow = (test) => {  // we use this for the class 
  console.log(test);
}

arrow('hi')

// for practice

// make an arrow function with no block body
const myArrow =  (y) => y +1 ;//
console.log(myArrow(8));

// make a function that returns a function

const functionFactory = () => () => console.log('This is wierd');
const a = functionFactory();
a();
const anotherfunction = functionFactory;
anotherfunction()();