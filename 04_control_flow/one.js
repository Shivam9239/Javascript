// const balance = 1000

// // if(balance>500) console.log("test"),console.log("test2");// dnt do it

// if(balance < 500){
// console.log("less than");
// }else if(balance  < 750){
//     console.log("less thn 750")
// }
// else{
//     console.log("less than1200")
// }

const userLoggedIn = true
const debitCard= true
const loogedInFromEmail = true
const  loggedInFromEmail = true
const loggedInFromGoogle = true

if(userLoggedIn && debitCard && 2==3){ //and 
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){ //or
    console.log("User logged in")
}