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

// function print(el){
//     console.log(el);
// }
// arr.forEach(print);
// OR

// arr.forEach((el) =>{
//     console.log(el)
// });
// arr.forEach((printNum)=>{
//     console.log(printNum)
// })
// function print(el){
//     console.log(el.name)
// }
// arr.forEach(print)
// arr.forEach(printNum)
// let num = [1, 2, 3];

// let double = num.map((el) => {
   
// })

// let gpa = arr.map((el) => {
//     return el.marks / 10;
// });

// let num = [100, 250, 30,40]

// let double = num.map((el) => {
//     return el + (el*18)/100;
// })

// let nums = [ "aron", "raven", "agon", "adadas", "america", "england"];

// let aS = nums.filter((el) => el[0] == "a")


// let arr = [1, 2, 3, 4, 5]
// console.log(arr.some((el) => (el > 0)))

// console.log(arr.reduce((res, el) => (res-el)));

// let finalVal = arr.reduce((res, el) => {
//     console.log(res);
//     return res+el;
// });

// console.log(finalVal)

// let arr = [1, 10, 8, 57, 4 , 9];

// // let max = -1;
// // for(let i=0; i<arr.length; i++){
// //     if(max < arr[i]){
// //         max= arr[i];
// //     }
// // }
// // console.log(max);
// let max = arr.reduce((max, el) => {
//     if(max<el){
//         return el;
//     } else {
//         return max;
//     }
// });

// console.log(max);

// let arr = [10, 70, 80, 20, 60]

// console.log(arr.every((el) => (el%10 === 0)));



// function getMin(num){
    
//     let smallest = num.reduce((min, el) => {
//         if(min>el){
//             return el
//         } else{
//             return min
//         }
//     });

//     return smallest;
// }



// let nums = [1, 69 , 10, 89 , 79, 67, 29];


// console.log(getMin(nums))

// function sum(a, b=10){
//     return a+b;
// }

// let arr = [5, 6, 20, 19]
// let arr1 = [8, 8, 10, 59]
// let nums = [...arr, ...arr1]

// let data = {
//     email: "GS007@gamil.com",
//     password: 1234,
// }

// let dataCopy = {...data, id: "abc123"}


// function sum(...args){
//     for(let i=0; i<args.length; i++){
//         console.log("DONE: ", args[i])
//     }
// }

// function min(a, b, c, d){
//     console.log(arguments.length)
//     console.log(arguments)
//     arguments.push(1);
// }

// function sum(...args){
//     return args.reduce((sum, el)=> sum + el)
// }

// function max(msg, ...args){
//     console.log(msg)
//     return args.reduce((max, el) => {
//         if(max<el){
//             return el;
//         } else{
//             return max;
//         }
//     })
// // }

// let names = ["tony", "bruce", "steve", "peter"];

// // let winner = names[0];
// // let runner = names[2];
// // let looser = names[3];

// let [winner, runner, ...looser] = names;


// const student = {
//     name: "Sunny",
//     age: 18,
//     aspect: "Shadow",
//     aspectRank: "Divine"
// }

// // let name = student.name;
// // let aspect = student.aspect;

// let {name: mC, aspect: power, city="forgotten shores"} = student;