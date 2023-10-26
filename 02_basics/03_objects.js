
//singleton
//Object.createe

//objects literals

const mySym=Symbol("key1")
const JsUser = {
    name: "Shivam",
    "full name":"Shivam kunwar",
  mySym:"mykey1",
    age: 18,
    location: "jaipur",
    email: "kunwarshivam9239@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[["full name"]]);
// console.log(JsUser[mySym]);//mykey1
// console.log(typeof JsUser.mySym);//string

//wheneve eant to use symbol as a symbol and not let to pass as  a string  use 
// use these bracketfs while creating any object[] print mein bhi [] bracket
//imp in interveiw

JsUser.email = "devson.chatgpt.com"; //overwite variable
// Object.freeze(JsUser);//will let to not change any value of aprticulat object

JsUser.email="shivam@google.com"
console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("Hello Js User");
}


JsUser.greetingTwo = function(){
    console.log(`Hello,${this.name}`);
}

console.log(JsUser.greeting()) ;
console.log(JsUser.greetingTwo()) ;
//using square brackets to accesss objects in some cases in interveiw
