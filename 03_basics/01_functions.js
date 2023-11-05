

function saymyName(){
    console.log("S");
    console.log("h");
    console.log("i");
    console.log("v");
    console.log("a");
    console.log("m");
}
saymyName();//refernce

//                      parameteres
//  function addTwoNumbers(number1,number2){
// console.log(number1+number2)

//  }

function addTwoNumbers(number1,number2){
//    let result = number1 + number2
//    return result;
//    will not do any work after return statement
//    console.log("shivam")
    return number1+number2;
     }
     


//  //              arguements
 const result = addTwoNumbers(5,9)
// console.log("Result:", result);

function loginUserMessage(username="sam"){
//     if (username === undefined){
// console.log("Pls enter a username");
// return
//     }

if(!username){
    console.log("pls eneter your name");
    return;

}
return `${username} just logged in`
}

// console.log(loginUserMessage("shivam")
console.log(loginUserMessage("sk"))


//cart
//                          rest or spread operator
// function calculateCartPrice(...num1){
// return num1;
// }

// console.log(calculateCartPrice(200,400,500));


//interveiw perspective
function calculateCartPrice(val1, val2,...num1){
    return num1;
    }
    
   // console.log(calculateCartPrice(200,400,500,20000));


//    whwenevve handle this type of objecet type safeety is must 
   const user ={
    username:"Shivam",
    prices:"133"
   }
   function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
   }
    
//    handleObject(user);
   handleObject({
    username:"Devson",
    price:"96"    })
   
    //passing array
const myArray=[210,200,500]
function returnSecondValue(getarray){
    return getarray[2]
}
console.log(returnSecondValue(myArray));