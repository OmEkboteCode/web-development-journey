let a = parseInt(prompt("Enter first number"))
let b = parseInt(prompt("Enter second number"))
let operator = prompt("Enter the operator")

const calculator = {
    add(a, b){
        return a+b
    },
    sub(a, b){
        return a-b
        // console.log(a - b)
    },
    mult(a, b){
        return a * b
        // console.log(a * b)
    },
    div(a, b){
        return a/b
        // console.log(a / b)
    }
}


switch(operator){
    case "+":
        console.log(calculator.add(a,b))
        break;
    case "-":
        console.log(calculator.sub(a,b))
        break;
    case "*":
        console.log(calculator.mult(a,b))
        break;
    case "/":
        console.log(calculator.div(a,b))
        break;
    default:
        console.log("Invalid Operator");
}

