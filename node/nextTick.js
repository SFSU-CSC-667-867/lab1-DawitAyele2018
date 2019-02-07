
process.nextTick(() => console.log('Hello'));
setImmediate(() => console.log('Now'));
setImmediate(() => console.log('Now1'));
setImmediate(() => console.log('Now2'));
setImmediate(() => console.log('Now3'));
console.log('world');

//FIFO
// first we do process on nexttick