// const tinderUser = new Object() //singleton object
 const tinderUser = {} //non singleton project

tinderUser.id="123abc"
tinderUser.name="Shivam"
tinderUser.isLoggedIn=false


// console.log(tinderUser);
const regularUser={
    email: "some@gmail.com",
    fullname: {
           userfullname:{
    firstname: "Shivam",
    lastname: "Kunwar"
       }
    }
}
console.log(regularUser.fullname.userfullname.firstname); 
//optional chaining
// console.log(regularUser.fullname?.userfullname.firstname); 

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

//const obj3={obj1,obj2}//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//const obj3=Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2}
console.log(obj3);

const users=[
    {
        id:1,
        email:"h@gamil.com",
    },
    {

    },
    {

    }
]
users[1].email
// console.log(tinderUser);

console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));//[ '123abc', 'Shivam', false ]
console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Shivam' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//to check if property is their or not