//date is object in javascript
// months strart from 0

// let myDate= new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// //try all methods
// console.log(typeof myDate);
let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());
//  let myCreatedDate2 = new Date(2023,0,23,5,6,4)
// console.log(myCreatedDate2.toLocaleString());

let myCreatedDate2 = new Date("2023-01-14")
// console.log(myCreatedDate2.toLocaleString());
 
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
//to convert in milliseconds

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);

// `${newDate.getDate()}` and tme is/

newDate.toLocaleString('default',{
    weekday:"long",
   
})

console.log(newDate);

