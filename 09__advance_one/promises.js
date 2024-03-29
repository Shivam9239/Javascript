// const promiseOne= new Promise(function(resolve,reject){
//     //Do an async task
//     //DB calls, crytography, network
//     setTimeout(function(){
//         console.log('Aync task is completed');
//         resolve();
//     },1000)
    
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve();

//     },1000)
// }).then(function(){
//     console.group('Async 2 rsolved');
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Shivam",email:"devson@example.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error= false
//         if(!error) {
//            resolve({username:"Dev", password:"123"})
//         }else{
//             reject('ERROR: Something went wrong')
//         }
//     },1000)
// })

// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(function(){
//     console.log("The promise is either resolved or rejected")
// })

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"Javascript", password:"123"})
        }else{
            reject('ERROR: JS went wrong');
        }
    },1000)
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     }catch(error){
//         console.log("E: ",error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error))


//Promise all
