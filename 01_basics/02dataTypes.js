"use strict"; //treat all JS code as newer version

// alert(3+3) // We are using node.js, not browser
console.log(3 
    +
    3)// code readability should  be high, never right code like this

    console.log("Shivam")


    let name="Shivam"
    let age=21
    let isLoggedIn=false
    let state;

    //number =>2 to power 53
    //bigint 
    //string => ""
    //boolean =>true
    //null standalone value // is object type of
    // undefined =>
  //symbol 


  //object

  console.log(typeof undefined);// undefined
  console.log( typeof null);// object;

So null simply meant nothing or void and was represented by all 0's. Hence all its 32 bits were 0's. 
So whenever the JavaScrit interpreter reads null, it considers the first 3 bits as type “object”. That is why typeof null returns “object”.
