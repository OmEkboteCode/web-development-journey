const students = [
    { name: "Aarav", marks: [82, 91, 76] },
    { name: "Sara", marks: [55, 61, 58] },
    { name: "Kabir", marks: [95, 92, 98] }
];

function calculateAverage(marks) {
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    return total / marks.length;
}

function createReport(studentList) {
    return studentList.map(student => {
        const { name, marks } = student;

        const average = calculateAverage(marks);

        return {
            name,
            average,
            passed: average >= 60
        };
    });
}

const reports = createReport(students);

const passedStudents = reports.filter(report => report.passed);

const topper = reports.reduce((best, current) => {
    return current.average > best.average ? current : best;
});

console.log("Passed Students:");
console.log(passedStudents);

console.log("\nTop Performer:");
console.log(topper);














// const student = {
//     name: "Glacier",
//     age: 19,
//     course: "JavaScript",
//     marks: [92, 88, 95]
// };


// let {name, course} = student; 

// console.log(name);
// console.log(course);

// let [first, second] = student.marks;
// console.log(first)
// console.log(second)

// let newProfile = {...student, status: "Excellent", course: "Advanced JavaScript"}

// console.log(newProfile)




// const colors = ["Red", "Blue", "Green", "Yellow"];

// let [first1, ...remaining] = colors;

// console.log(first1);
// console.log(remaining)




// const finalPrice = (price, taxper = 18) =>{
//     return price + (price * taxper)/100;
// }

// console.log(finalPrice(100));

// let marks = [23, 40, 89, 13]



// const getHighest = (...args) =>{
//     return Math.max(...args)
// }
// // const getHighest = (...args) => {
// //     args.reduce((max, mark) =>{
// //         if(max<mark){
// //         return mark
// //         } else{
// //             return max 
// //         }
// //     })
// // }



// const warehouseA = ["Keyboard", "Mouse"];

// const warehouseB = ["Monitor", "Laptop"];

// let warehouse = [...warehouseA, ...warehouseB]
// console.log(warehouse)



// const student = {
//     name: "Glacier",
//     course: "JavaScript",
//     score: 91
// };

// let studentUpdate = {...student, score: 96, status: "Passed"}

// console.log(studentUpdate)

// function doubleAndReturnArgs(arr, ...args){
//     let newArr = args.map((num) => num * 2);
//     let final = [...arr, ...newArr]
//     return final
// }

// const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});



// const marks = [72, 85, 91, 63, 48, 99];

// const subjects = [
//     "math",
//     "science",
//     "english",
//     "history"
// ];

// let performanceReport = marks.map(function (el){
//     return el + 5;
// })
// console.log(performanceReport);

// let honorRoll = marks.filter((num)=> num>=80)

// console.log(honorRoll)

// let subjectReport = subjects.map(function (up) {
//     return up.toUpperCase()
// })

// console.log(subjectReport)

// let scholarshipEligibility = marks.every((el)=> el>=40)

// console.log(scholarshipEligibility)

// let total = marks.reduce((res,el)=>{
//     return res+el
// })

// let average = total/marks.length;

// console.log(`Total Marks: ${total}
// Average Marks: ${average}`)

// let highest = marks.reduce((max, el) =>{
//     if(max<el){
//         return el;
//     } else{
//         return max;
//     }
// })

// console.log("Highest: ", highest)


// `Total Marks: ${total}
//     Average Marks: ${average}
// let arr = [1, 4, 45, 46, 1, 250, 569, 300];



// console.log(arr.some((el) => (el%2 == 0)))

// let reduced = arr.reduce((res, el) =>{
//     res+el
// })

// let arr1 = [{
//     name: "Vinh Giang",
//     Profession: "Public Speaker",
//     marks: 98
// }, {
//     name: "Elon Musk",
//     Profession: "Entrepreneur",
//     marks: 99.8

// }, {
//     name: "Shradha Khapra",
//     Profession: "Coder",
//     marks: 96
// }];


// let num = [1, 2, 3, 4, 5]

// console.log(num.reduce((res, el)=>(res+el)))









// console.log(arr.some((el) => (el > 0)))

// console.log(arr.reduce((res, el) => (res-el)));

// let finalVal = arr.reduce((res, el) => {
//     console.log(res);
//     return res+el;
// });

// console.log(finalVal)




// let newArr1 = arr1.map((el)=> {
//     return el
// })

// let tax = arr.map((el)=>{
//     return el + (18*el)/100
// })

// let words = [ "aron", "raven", "agon", "adadas", "america", "england"];

// let aS = words.filter((el) => el[el.length-1] == "a")






// // let spread = arr.forEach((el) => {
// //     console.log(el)
// // })

// let map = arr.map((el) =>{
//     return el*5
// })

// let newArr = arr.filter((el) => (
//     el>1
// ))


// // function print(el){
// //     console.log(el);
// // }
// // arr1.map(print);

// // function print(el){
// //     console.log(el)
// // }
// // arr1.map(print)
// // // OR

// // arr.forEach((el) =>{
// //     console.log(el)
// // });

// // let print = (el) => {
// //     console.log(el)
// // }
// // // arr1.map((el)=>{
// // //     console.log(el)
// // // })
// // arr1.map(print)


// // arr.forEach((printNum)=>{
// //     console.log(printNum)
// // })
// // function print(el){
// //     console.log(el.name)
// // }
// // arr.forEach(print)
// // arr.forEach(printNum)