// function hello() {
//         console.log("hello")
// }
// function printName() {
//         console.log("Glacier")
//         console.log("Sunny")
// }

// function print1to5() {
//         for(let i=1; i<6; i++){
//                 console.log(i)
//         }
// }
// print1to5()


// printName()

// function printTitles() {
//         console.log("Shadow Slave");
//         console.log("Sword Art Online");
        
// }

// printTitles()



// function roll() {
//         let random = Math.floor(Math.random() * 6) + 1;
//         console.log(random)
// }


// function sum(a, b){
//         console.log(a + b)        
// }


// sum(4, 8)
// sum(4, 7)
// sum(40, 70)
// function printInfo(name , age){
//         console.log(`${name}'s age is ${age}`);
        
// }

// printInfo("Glacier", 19);
// printInfo("Steve", 19);

// function avg(a, b, c){
//         console.log((a+b+c)/3)
// }
// avg(2,2)

// function mTable(n){
//         for (let i=1; i<11; i++){
//                 console.log(n, "X", i, "=", n*i )
//         }
// }

// mTable(6)


// function sum(a, b) {
//         return a+b;
// }
// ;
// console.log(sum(sum(4, 10), 6));

// function isAdult(age) {
//         if(age >= 18){
//                 return "Adult"
//         } else{
//                 return "Not adult"
//         }
        
// }

// let total = 54;  //Global Scope

// function sum(n){
//         let total = 0; //
//         for (let i=0; i<=n; i++){
//                 total+=i
//         }
//         return total
// }

// console.log(sum)

// function outerFunc() {
//         let x=5;
//         let y=3;
//         function innerFunc(){
//                 console.log(x);
//         }
//         innerFunc();
// }

// let sum = function(a, b) {
//         return a+b
// }

// sum

// function multipleGreet(func, n){
//         for(let i=1; i<=n; i++){
//                 func();
//         }
// }
// let greet = function(){
//         console.log("hello");
// }
// let topic = function(){
//         console.log("Higher Order");
// }

// multipleGreet(function() {console.log("namaste")}, 10)


// let even = function(n) {
//         console.log(n%2 == 0);
// }

// function oddEvenTest(request){
//         if(request == "odd"){
//                 return function(n) {
//                         console.log(!(n%2 == 0));
//                 }
//                 return odd;
//         } else if(request == "even"){
//                 return function(n) {
//                         console.log(n%2 == 0);
//                 }
//                 return even;
//         } else {
//                 console.log("wrong request")
//         }
// }

// let request = "odd"; //even

// let test = oddEvenTest(request);

const calculator = {
        num: 55,
        add(a, b){
                return a + b
        },
        sub(a, b){
                return a - b
        },
        mult: function(a, b){
                return a * b
        }
};