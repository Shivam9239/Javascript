const Name="Shivam"
const repoCount=3

//console.log(Name+repoCount+" Value ");//Not recommended
//backticks String interpolation
console.log(`Hello my name  is ${Name} and my repoCount is ${repoCount}`);

const gameName= new String('Shivam-hc-vb')
// String name  object    constructor

// console.log(gameName[0]);
// console.log(gameName.__proto__); //object syntax

// console.log(gameName.length);//6
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));

const newString=gameName.substring(0,4)// not give negative vLUE
console.log(newString)

const anotherString=gameName.slice(-5,2)//reeverse valuE
console.log(anotherString);

const newString1=" shivam  "
console.log(newString1)
console.log(newString1.trim());

const url="http://hitesh.com/hitesh%20choudhary "

console.log(url.replace('%20','-'));

url.includes('hitesh')
console.log(url.includes('sundar'));

console.log(gameName.split(""));