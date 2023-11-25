
// var c= 300
let a=300
{}//scope
if(true){
    let a =10;
const b = 20
c =30
// console.log("inner",a);

}

for(let i=0; i<Array.length;i++){

}


// console.log(a);
// console.log(b); 
// console.log(c);

function one(){
    const username="Shivam"

    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);


    // two()
}
// one()

if(true){
    const username = "hitesh"
    if(username==="hitesh"){
        const website="yotube"
        // console.log(username+website);

    }
    // console.log(website);
}
// console.log(username);

// +++++++++++interesting++++++++++++++++++++++++++++++
console.log(addone(5));
function addone(num){
return num+1
}



//could be expresson also
addTwo(5)
const addTwo = function(num){
    return num+2
}
addTwo(5)
