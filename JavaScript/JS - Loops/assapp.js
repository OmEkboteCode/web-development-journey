// let n = parseInt(prompt("Enter any number"))

// for(let i = 3; i<=n; i+=3){
//     console.log(i);
// }

// let words = ["JavaScript", "HTML", "CSS", "React", "Node"];

// console.log(words.join(" "))

// console.log(words.length)

// for(let word of words){
//     if (word.length > 4){
//         console.log(word)
//     }
// }

// for(let word of words){
//     console.log(word);
// }

// let matrix = [
//     ["🍎", "🍌", "🍇"],
//     ["🥭", "🍍", "🍉"],
//     ["🍒", "🥝", "🍓"]
// ];

// for(rows of matrix){
//     console.log(rows[2])
        
// }
// for(rows of matrix){
//     for (let i = 0; i<rows.length; i++){
//         console.log(rows[i])
//     }
        
// }



// //P2C1

// let usernames = [
//     "  Glacier ",
//     "Nova",
//     " shadow ",
//     "Phoenix  ",
//     "AI",
//     "  CodeMaster  "
// ];

// let valid = 0;

// for (let username of usernames){
//     username = username.trim();
//     username = username.toUpperCase();
//     if (username.length >= 5){
//         console.log(username)
//         valid += 1
//     }
// }

// console.log(`Valid Usernames: ${valid}`)

//P2C2

// let balance = 5000;

// let actions = [
//     "deposit",
//     "withdraw",
//     "balance",
//     "withdraw",
//     "exit"
// ];

// for (let action of actions){
//     if (action === "deposit"){
//         balance += 1000;
//     } else if (action === "withdraw"){
//         balance -= 500
//     } else if (action === "balance"){
//         console.log(balance)
//     } else if (action === "exit"){
//         break;
//     }
// }

// console.log(`Final Balance: ${balance}`)


// //P3C1
// let inventory = [
//     "Laptop",
//     "Mouse",
//     "Keyboard",
//     "Monitor"
// ];

// let found = false;

// for (let item of inventory) {

//     item = item.toLowerCase();

//     if (item === "mouse") {
//         found = true;
//         break;
//     }
// }

// if (found) {
//     console.log("Item Found");
// } else {
//     console.log("Item Missing");
// }

// console.log(inventory);



//P3C2
// let names = [
//     "Glacier",
//     "Nova",
//     "Shadow",
//     "Phoenix"
// ];

// let count = 0;

// for (let name of names) {

//     name = name.toUpperCase();

//     if (name.length > 5) {
//         count++;
//     }
// }

// console.log(names);
// console.log(count);

// if (names.includes("GLACIER")) {
//     console.log("Found");
// } else {
//     console.log("Missing");
// }


//P3C3

// let cart = [
//     "Milk",
//     "Bread",
//     "Eggs",
//     "Butter"
// ];

// let found = false;

// for (let item of cart) {

//     if (item === "Eggs") {
//         found = true;
//     }

//     break;
// }

// if (found) {
//     console.log("Eggs Found");
// } else {
//     console.log("Eggs Missing");
// }

// console.log(found);


//P3C4
let words = [
    "Java",
    "Python",
    "AI",
    "Programming",
    "Code"
];

let count = 0;

for (let word of words) {

    word = word.toUpperCase();

    if (word.length >= 4) {
        count++;
    }

    if (word === "PROGRAMMING") {
        break;
    }
}

console.log(count);
console.log(words);