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

function findHighest(marks){
        let largest = marks[0];
        for(let i=0; i<marks.length; i++){
                if(largest < marks[i]){
                        largest = marks[i]
                }
        }
        return largest
}

let phy = [75, 92, 68, 99, 81];
let topperMarks = findHighest(phy);
console.log(topperMarks)