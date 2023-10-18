const score= 650
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length); // prortype 3
// console.log(balance.toFixed(2)); //precision decimal 100.00

const otherNumber = 1123.89663

// console.log(otherNumber.toPrecision(3)); 

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN'));

//methods
// max_value and min value
// +++++++++++++++++++Matha++++++++++++++

// console.log(Math); // Object [Math] {} property
// console.log(Math.abs(-4)); //4
// console.log(Math.round(523.69)); //524
// console.log(Math.ceil(523.69)); //524
// console.log(Math.floor(523.69)); //523
// console.log(Math.sqrt(523.69)); 
// console.log(Math.sqrt(2)); 
// console.log(Math.min(4,8,5,63,72.5)); 
// console.log(Math.max(4,8,5,63,72.5)); 

console.log(Math.random()); // Iski value hamaesha 0 or 1 ke beech mein hi aayegi
console.log(Math.floor(Math.random()*10)+1); // 

const min = 10
const max = 20

console.log(Math.floor((Math.random()*(max-min+1))+min))
