const user = {
    username : "Shivam",
    loginCount:"8",
    signedIn: true,

    getUserDetails: function(){
        console.log("Got th user details from database");
        console.log(`Username: ${this.username}`)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
console.log(this);//

function User(username, loginCount,isLoogedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoogedIn;

    this.greeting=function(){
        console.log(`Welcome ${this.username}`)
    } 
    return this
}

const userOne = new User("shivam",8,true)
const userTwo = new User("kunwar",9,false,)
console.log(userOne.constructor);
// console.log(userTwo);
