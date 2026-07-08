// function greetUser(name){
//         return `Welcome, ${name}`
// // }
// function greetUser(name){
//         console.log(`Welcome, ${name}`)
// }


// greetUser("Steve")
// greetUser("Steve")
// greetUser("Steve")

// function introduceStudent(name, age, branch) {
//         console.log("=====STUDENT=====");
//         console.log(`Name: ${name}`)
//         console.log(`Age: ${age}`)
//         console.log(`Branch: ${branch}`)
// }

// introduceStudent("Glacier", 19, "CSE")
// introduceStudent("Arya", 19, "CSE")
// introduceStudent("Nova", 19, "ECE")

// function calculateTotal(price, quantity) {
//         return price*quantity
// }

// let total1 = calculateTotal(500, 2);
// console.log(total1)
// let total2 = calculateTotal(1200, 3);
// console.log(total2)

// function findHighest(marks){
//         let largest = marks[0];
//         for(let i=0; i<marks.length; i++){
//                 if(largest < marks[i]){
//                         largest = marks[i]
//                 }
//         }
//         return largest
// }

// let phy = [75, 92, 68, 99, 81];
// let topperMarks = findHighest(phy);
// console.log(topperMarks)

// function formatProductName(productName){
//     return productName.trim().toUpperCase();
// }

// // formatProductName("iPhone 14 Pro Max");
// // console.log(formatProductName("iPhone 14 Pro Max"))

// let products = ["iPhone 14 Pro Max", "Samsung Galaxy S23 Ultra", "OnePlus 11", "Google Pixel 7 Pro"];

// for (let i = 0; i < products.length; i++) {
//     products[i] = formatProductName(products[i]);
// }

// console.log(products)


// const student = {
//     name: "Glacier",
//     marks: {
//         math: 92,
//         physics: 88,
//         chemistry: 95
//     }
// };



// function calculateAverage(student) {
//     const mathMarks = student.marks.math;
//     const phyMarks = student.marks.physics;
//     const chemMarks = student.marks.chemistry;
//     const average = (mathMarks + phyMarks + chemMarks)/3
//     return average
// }
// console.log(calculateAverage(student))

// const books = [
//     {
//         title: " Atomic Habits ",
//         author: "James Clear",
//         pages: 320
//     },
//     {
//         title: " deep work",
//         author: "Cal Newport",
//         pages: 296
//     },
//     {
//         title: "Clean Code ",
//         author: "Robert C. Martin",
//         pages: 464
//     }
// ];


// function format(books){
//     for(let i=0; i<books.length; i++){
//         let bookTitle = books[i].title;
//         bookTitle = bookTitle.trim().toUpperCase();
//         let bookAuthor = books[i].author;
//         let bookPages = books[i].pages;
//         console.log(`Title: ${bookTitle}`)
//         console.log(`Author: ${bookAuthor}`)
//         console.log(`Pages: ${bookPages}`)
//     }
// }

// format(books)




// const students = [
//     {
//         name: " glacier ",
//         completed: 12,
//         total: 15
//     },
//     {
//         name: " arya",
//         completed: 15,
//         total: 15
//     },
//     {
//         name: " nova ",
//         completed: 7,
//         total: 15
//     }
// ];


// function formatText(text){
//     return text.trim().toUpperCase();
// }

// // function getCompleted(done, total) {
// //     let track = `${done}/${total}`;
// //     return track;
// }

// function getProgress(done, total) {
//     let progress = (done/total)*100;
//     return progress;
// }

// function completionStatus(done, total){
//     let status;
//     const progress = getProgress(done, total);
//     if(progress>50 && progress<=99.99){
//         status = "On Track"
//     } else if (progress === 100){
//         status = "Completed";
//     } else{
//         status = "Behind"
//     }
//     return status
// }


// function printDisplay(students){
//     for (let i=0; i<students.length; i++){
//         const student = students[i];
//         console.log(
//         `================Progress================
//         Name: ${formatText(students[i].name)}
//         Completed: ${(students.completed)}/${(students.total)}
//         Progress: ${getProgress(students.completed, students.total)}%
//         Status: ${completionStatus(students.completed, students.total)}
//         `
//         )
//     }
    
// }

// printDisplay(students)



