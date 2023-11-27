//IMediately invoked function expression
(function  chai (){
    // named iife
  console.log(`DB COnnected `)
})();
// interveiw
//imdetialy invoked 
//sometimes thers is problem with pollution of Global Scope 
//we use iife to remove pollution 

((name) =>{
    console.log(`DB CONNECTED two ${name} `);
})(`Shivam`)

//unnamed iifee with parameter 
//if want o write two iife in one using semicolon