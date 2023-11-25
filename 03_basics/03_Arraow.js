const user={
    username:"shivam",
    price: 100,

    welcomeMessage: function(){
    console.log(`${this.username},welcome to website`);
console.log(this);
}
}


user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
console.log(this)
//browser ke andar global object window  hai

// function coffee(){
//     let username= "Shivam"
//     console.log(this.username)
// }
// coffee()

const chai = ()=>{
    let username = 'shivam'
console.log(this)
}

chai()

// const addTwo = (num1, num2) => {
//     return num1+num2
// }

///implicit type

// const addTwo=(num1, num2) => num1+num2
// // const addTwo=(num1, num2) => (num1+num2)
// console.log(addTwo(3,7));

//explicit when you return 

const addTwo=(num1, num2) => ({username:"shivam"})

console.log(addTwo(3,4));

