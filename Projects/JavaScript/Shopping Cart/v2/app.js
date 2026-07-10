const formatText = (text) =>{
   return text.trim().toLowerCase();
}

let displayMenu = () =>{
    console.log(
        `=====Shopping Cart V2======
    1. Add Product
    2. View Cart
    3. Remove Product
    4. Checkout
    5. Exit`
    )
    let option = prompt("Enter your option");
    option = formatText(option)
    return option
}


let running = true

while(running){
    switch(displayMenu()){
        case "quit":
            console.log("Thank You for Visiting Us");
            running = false;
            break;
        case: "Add Product"
        case "":
            console.log("Feature not implemented yet.");
            break;
    }
    
}