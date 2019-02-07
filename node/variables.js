// there are 3 basic ways to declare variables in js

// Var, but don't use this one anymore
var test =  3;// dont use this

// let, is like var, but block scoped, and not allowed to re-declare
let hello = 'world'; // Notice strings use single quotes,,
hello = 5; // changing the type of variable is okay, in this case string to number.

// const is a constant
const iAmAConstant = 9; //

// objects
// variables can also be objects
const obj = {}; // declear with bracket

// objects can dynamically add and remove properties
obj.a = 9;

// For Practice

// declare an object with an object as a property

// delete a property

// change a property
const testVar = {
    y : {
        a: 'Hello', // its a good habit to use comma
        b: 4,
    },
};
console.log(testVar);
testVar.a = 'p';
delete testVar.y;
testVar.a = 9;
console.log(testVar);