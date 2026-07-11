// const student = {
//     name: "Steve",
//     age: 19,
//     eng: 87,
//     math: 90,
//     phy: 89,
//     getAvg(){
//         console.log(this)
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }
// }

// function getAvg(){
//     console.log(this)
//     // let avg = (this.eng + this.math + this.phy) / 3;
//     // console.log(`${this.name} got avg marks = ${avg}`);
// }
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")

// try {
//     console.log(a);
// } catch(err) {
//     console.log("Caught an error.. a is not defined");
//     console.log(err);
// }

// console.log("Hello2")
// console.log("Hello2")
// console.log("Hello2")

// const sum = (a, b) => {
//     console.log( a + b );
// }

// const cube = (a) => {
//   return a * a * a;
// };

// const pow = (a, b) => {
//   return a ** b;
// // };
//  const hello = () => {
//     console.log("Hello World")
//  }

// const mul = (a, b) => a * b;
// const cube = (a) => a * a * a;
// const hello = () => "Hello World";

// console.log("hi there!");

// setTimeout( () => {
//     console.log("Sunny From SS");
// }, 4000);
// console.log("Welcome")
// console.log("Welcome")
// console.log("Welcome")
// console.log("Welcome")

// console.log("Calculator");

// function sum(a,b){
//     return a*b
// }
// let id = setInterval( () =>{
//     console.log(sum(2,4))
// }, 2000);

// function greet(){
//     console.log("hello");
// }

// setInterval(greet, 4000)

// let count = 0;

// // function nextNumber(){
// //     return count++

// // }

// let stopper = setInterval(() => {
//     count ++
//     console.log(count);
//     if (count === 10){
//         clearInterval(stopper)
//     }
// }, 2000)

// const student = {
//     name: "Tom",
//     marks: 96,
//     prop: this,
//     getName: function() {
//         console.log(this)
//         return this.name;
//     },
//     getMarks: () => {
//         console.log(this)
//         return this.marks;
//     },
//     getInfo1: function() {
//         setTimeout( () => {
//             console.log(this)
//         }, 2000);
//     },

//     getInfo2: function() {
//         setTimeout( function(){
//             console.log(this)
//         }, 2000);
//     }

// }

// const square = (a) => a * a;

// const greet = () => {
//   console.log("Hello World");
// };

// let count = 0;

// let id = setInterval(() => {
//   greet();
//   count++;
//   if (count === 5) {
//     clearInterval(id);
//   }
// }, 2000);

let id = setInterval(() => {
    console.log("hello world");
}, 2000)

setTimeout(() => {
    clearInterval(id);
    console.log("Clear Interval Ran")
}, 10000)