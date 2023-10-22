// // //array

 const myArray=[0,1,2,3,4,5,6,7]
// const myHeroes=["shaktiman","naagraj"];
// const myArray2=new Array(1,2,3);

// // console.log(myArray[1]);

// // //Array methods
// // // myArray.push(6);

// // // myArray.pop();
// // // myArray.unshift(5)//insert in start
// // myArray.shift()//remove in start

// // console.log(myArray.includes(8));
// // console.log(myArray.indexOf(2));

// const newArray= myArray.join()// converted in string
// console.log(myArray);
// console.log(newArray);
// console.log(typeof newArray);//string

///slice , splice
//Q diff between splice and slice
console.log("A ",myArray);
const mn1=myArray.slice(1,3)
console.log(mn1); //include 1 nad second element only and upto 3rd but not inclulded
console.log("B",myArray)

const mn2= myArray.splice(1,3)//includes 3rd element but also changes the original arrray
console.log(mn2);
console.log("C",myArray);

