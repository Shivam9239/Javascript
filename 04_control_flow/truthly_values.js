const userEmail = "devson.ai"

if(userEmail){
    console.log("Got user Email");
}else{
    console.log("Dont have user Email");
}

// when we assume the value is true

// fasly values

// false, 0,-0,BigInt 0n,"",null,undefined,NaN

// Truthy values
// "0",'false'," ",[],{},function(){}//empty function , 

//to detect whether array or object is empty or not

if (userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}
    if(Object.keys(emptyObj).length === 0){
   console.log("Objects is empty")
    }
 

    // Nullish coalsecing operaotr (??): null undefined

    let val1;

    // val1 = 5??10
    // val1=null??10

    // val1= undefined??15
    val1= null??10??15

    console.log(val1);

    // Ternary operator

    // condition ? true : false//

    const iceteaPrice = 100;
    iceteaPrice <=80 ? console.log("less than 80") : console.log("more than 80");

