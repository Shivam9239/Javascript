

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

