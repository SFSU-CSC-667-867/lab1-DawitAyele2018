// Arrays in js

// arrays can be delared explicitly
const array = [9, 3, 4];
array[5] =9;
console.log(array);
array.forEach((n) =>{
    console.log(n);
});

// or with new keyword
const anotherArray = new Array(5);

// access array elements
console.log(array[0]);

// change elements
array[1] = 'hello';

// for practice

// use forEach
array.forEach((n) =>{
    console.log(n);
});
// use map
const newArray = arrayTest.map(i=>i+1);// if there is one peramiter 
console.log(newArray);
// use pop
newArray.pop();
console.log(newArray);

// use push
newArray.push();
console.log(newArray);
// use shift
newArray.shift();
console.log(newArray);
// use unshift
newArray.unshift();
console.log(newArray);
// use filter