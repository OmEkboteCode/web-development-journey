let first = parseInt(prompt("Enter first number"))
let second = parseInt(prompt("Enter second number"))
let operator = prompt("Enter the operator")

switch(operator){
    case "+":
        console.log(first + second)
        break;
    case "-":
        console.log(first - second)
        break;
    case "*":
        console.log(first * second)
        break;
    case "/":
        console.log(first / second)
        break;
    default:
        throw "Invalid Operator";
}

try{
    switch(operator){
        
    }
}

// const calculator = {
//     add(first, second){
//         return first + second;
//     },
//     sub(first, second){
//         return first - second;
//     },
//     mult(first, second){
//         return first * second;
//     },
//     div(first, second){
//         return first / second;
//     }
// }

// console.log(calculator.add(5,10))