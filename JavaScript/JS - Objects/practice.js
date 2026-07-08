// //P1C1

// const student = {
//         name: "Glacier",
//         age: 19,
//         branch: "CSE",
//         cgpa: 9.2,
//         isHosteller: false
// }

// console.log(student);
// console.log(student.name);
// console.log(student.cgpa);
// student.cgpa = 9.5;
// student.skills = "JavaScript";
// console.log(student)

//P1C2

// const book = {
//         title: "Atomic Habits",
//         author: "James Clear",
//         price: 550,
//         available: true
// }

// console.log(book.title);
// console.log(book["title"]);
// book.price = 600;
// book.pages = 320;
// delete book.available;
// console.log(book);

// const student = {
//     name: "Glacier",
//     age: 19,
//     marks: {
//         math: 92,
//         physics: 88,
//         chemistry: 95
//     }
// }

// console.log(student.marks.physics)
// student.marks.chemistry = 90;
// student.marks.english = 90;
// console.log(student.marks)

//P1C4

// const library = [
//     {
//         title: "Atomic Habits",
//         pages: 320
//     },
//     {
//         title: "Deep Work",
//         pages: 280
//     },
//     {
//         title: "Clean Code",
//         pages: 450
//     }
// ];
// console.log(library[1].title);
// console.log(library[2].pages);

// library[0].pages = 330;
// library[1].author = "Cal Newport";

// for(let i = 0; i<library.length; i++ ){
//         console.log(`${library[i].title} - ${library[i].pages}`)
// }

//P1C5

// let random = Math.floor(Math.random() * 6) + 1;
// console.log(`You rolled: ${random}`);
// let count = 0;

// for (let i = 1; i <= 10; i++){
//         random = Math.floor(Math.random() * 6) + 1;
//         console.log(`You rolled: ${random}`)
//         if (random === 6){
//                 count++;
//         }
// }
// console.log("Total sixes: ", count)

//P2C1

// const students = [
//     { name: "Glacier", marks: 92 },
//     { name: "Nova", marks: 48 },
//     { name: "Arya", marks: 85 },
//     { name: "Kai", marks: 39 },
//     { name: "Luna", marks: 76 }
// ];
// let passed = 0;
// //let largest = `Name: ${students.[0].name}`
// let largest = students[0].marks;
// let topper = students[0].name;

// console.log("Students with 60+ marks:")
// for (let i = 0; i<students.length; i++){

//         if(students[i].marks >= 60){

//                 console.log(students[i].name)
//         }
//         if(students[i].marks >= 40){
//                 passed++;
//         }
//         if (largest < students[i].marks){
//                 largest = students[i].marks;
//                 topper = students[i].name;
//         }
// }

// console.log("Passed Students: ", passed);
// console.log("Topper: ", topper, "Marks: ", largest);

//P2C2
// const users = [
//     { username: "Glacier", active: true, score: 150 },
//     { username: "Nova", active: false, score: 80 },
//     { username: "Arya", active: true, score: 230 },
//     { username: "Kai", active: true, score: 120 },
//     { username: "Luna", active: false, score: 95 }
// ];

// for (let i = 0; i<users.length; i++){
//         if(users[i].active === true){
//                 console.log(users[i].username);
//                 users[i].score += 50;
//         } else{
//                 users[i].score -= 20;
//}

// }

// console.log(users)

//P2C3

const orders = [
  { customer: "Glacier", item: " Laptop ", quantity: 1, price: 60000 },
  { customer: "Nova", item: "mouse", quantity: 2, price: 800 },
  { customer: "Arya", item: " KEYBOARD ", quantity: 1, price: 1500 },
  { customer: "Kai", item: "monitor", quantity: 3, price: 12000 },
];

let grandTotal = 0;
for (let i = 0; i < orders.length; i++) {
  orders[i].item = orders[i].item.trim();
  orders[i].item = orders[i].item.toUpperCase();
  orders[i].total = orders[i].quantity * orders[i].price;
  console.log(orders[i].customer.toUpperCase(), "ordered", orders[i].item);
  console.log(`Total: ₹${orders[i].total}`);
  grandTotal += orders[i].total;
}
console.log(orders);
console.log(grandTotal);
