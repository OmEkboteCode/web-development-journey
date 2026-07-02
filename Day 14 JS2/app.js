// let size = 'XL';

// if (size == 'XL'){
//     console.log("Price is RS. 250")
//     if 
// } else if (size == 'L'){
//     console.log("Price is RS. 200")
// } else if (size == 'M'){
//     console.log("Price is RS. 100")
// } else if (size == 'S'){
  
//     console.log("Price is RS. 50")
// }

// if ("apple"){
//     console.log("its true value")
// } else{
//     console.log("its false value")
// }

// let day = 1;

// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
// }
// console.log('Monday')
// console.warn("something is wrong")

// let name = prompt("Name")
// console.log(name)

// let num = prompt("Enter Num");

// if (num % 10 == 0){
//     console.log("Good")
// } else{
//     console.log("Bad")
// }

// let name = prompt("Name");
// let age = prompt("Age")

// alert(`${name} is ${age} years old.`)


// let quarter = 1;

// switch(quarter){
//     case 1 :
//         console.log("Jan", "Feb", "Mar", "Apr");
//         break;

//     case 2 :
//         console.log("Jan", "Feb", "Mar", "Apr");
//         break;

//     case 3 :
//         console.log("Jan", "Feb", "Mar", "Apr");
//         break;

//     case 4 :
//         console.log("Jan", "Feb", "Mar", "Apr");
//         break;
//     default:
//         console.log("NONE")
// }

// let word = prompt("Word");

// if ((word[0] === 'a' || word[0] === 'A') && (word.length > 5)){
//         console.log("Golden Word");
// } else{
//     console.log("Not Golden Word");
// }

// let num1 = 12;
// let num2 = 90;
// let num3 = 190;

// let largest = num1;

// if (num2 > largest){
//     largest = num2;
// }
// if (num3 > largest){
//     largest = num3
// }

// console.log(largest)


// let username = prompt("Username");

// if (username.length < 5){
//     console.log("Username too short")
// } else if (username[0] === "$"){
//     console.log("Username cannot start with $")
// } else{
//     console.log("Valid username")
// }

// let totAmount = prompt("Amount");

// if (totAmount >= 1000){
//     console.log("You get a 20% discount")
// } else if (totAmount >= 500){
//     console.log("You get a 10% discount")
// } else {
//     console.log("No discount")
// }

// let username = prompt("Username");
// let age = prompt("Age");

// if (age >= 18){
//     console.log(`Welcome, ${username} You are eligible to vote.`)
// } else {
//     console.log(`Welcome, ${username} You are not eligible to vote.`)
// }
// let username = "Glacier";
// let password = "Glacier123";
// let attempts = 1;

// if (username && password.length >= 8) {
//     attempts++;

//     if (password[0] === username[0]) {
//         console.log("A");
//     } else {
//         console.log("B");
//     }
// } else {
//     attempts = 0;
// }

// console.log(attempts);

// if (attempts === 2 && password.length > 10) {
//     console.log("Accepted");
// } else {
//     console.log("Rejected");
// }

// let username = prompt("Username");
// let password = prompt("password");

// if ((username === "") || (password === "")){
//     console.log("Cannot be empty")
// } else if (username[0] === " "){
//     console.log("Username cannot start with space")
// } else if (password.length < 8){
//     console.log("Password should contain atleast 8 characters")
// } else if (username === password){
//     console.log("Username and Password cannot be same")
// } else {
//     console.log("Login Successful")
// }


let accHolder = prompt("Name");
let currBalance = Number(prompt("Balance"))
let withdrawlAmount = Number(prompt("Amount"))

if ((accHolder === "") || (currBalance === "") || (withdrawlAmount === "")){
    console.log("Fields cannot be empty");
} else if (withdrawlAmount <= 0){
    console.log("Withdrawl Rejected. Amount cannot be less than or equal to zero");
} else if (withdrawlAmount > currBalance) {
    console.log("Withdrawl Rejected. Withdrawl amount greater than current balance");
} else {
    currBalance = currBalance - withdrawlAmount;
    console.log(`Account Holder: ${accHolder} Withdrawl: ${withdrawlAmount} Current Balance: ${currBalance}`)
}