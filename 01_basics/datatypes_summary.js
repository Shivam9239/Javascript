//https://262.ecma-international.org/5.1/#sec-11.4.3

//+++++++++++++++++++++++++++++++++++++++++++++
/*Stacks(Primitive)
@Yaha changee copy mein hota hai original mein remain unchenged
copy hi milta hai
*/





/*Heap(Non Primitive)
@Yaha Original mein change hota hai
refernece hi  milta hai
*/

//Stack example
let myYoutubename="Devson"
let  anotherName=myYoutubename
anotherName="chai aur code"

console.log(myYoutubename)
console.log(anotherName)


//Heap example
let userOne = {
    email:"@google.com",
    upi:"user@ybl"
}
let user2=userOne

user2.email="kunwarshivam9239@gmail.com"
console.log(userOne.email)
console.log(user2.email);