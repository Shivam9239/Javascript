// const marvel_heros=["thor","iron-man","spiderman"];
// const dc_heros=["batman","superman","flash"];

// // marvel_heros.push(dc_heros);
// // console.log(marvel_heros);
// // console.log(marvel_heros[3][1]);//not a good syntax

// // marvel_heros.concat(dc_heros);
// // console.log(marvel_heros);//[ 'thor', 'iron-man', 'spiderman', [ 'batman', 'superman', 'flash' ] ]

// // const allheros=marvel_heros.concat(dc_heros);
// // console.log(allheros);// output : [ 'thor', 'iron-man', 'spiderman', 'batman', 'superman', 'flash' ]


// //spread operator

// const all_new_heros=[...marvel_heros, ...dc_heros]
// // console.log(all_new_heros);// should use this to combine two array to be one not array in array ... is important here

// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array= another_array.flat(Infinity);
// console.log(real_another_array);

// Array.isArray("Shivam");
// console.log(Array.isArray());
// console.log(Array.from("Shivam"));//converts in array

// console.log(Array.from({name:"Shivam"}));// intersting

// let score1=200;
// let score2=600;
// let score3=800;

// console.log(Array.of(score1,score2,score3));

const fruits=[];
fruits.push("banana","mango","litchi");
console.log(fruits.length);

// fruits[5] = "mango";
// console.log(fruits[5]);
// console.log(Object.keys(fruits));
// console.log(fruits.length);
// console.log(fruits);

// adding empty slots
fruits.length = 2;
console.log(fruits);

console.log(Object.keys(fruits));
console.log(fruits.length);
console.log(fruits[8]);

