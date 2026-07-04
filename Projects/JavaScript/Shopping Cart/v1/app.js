let cart = [];


while(true){
        console.log("===== SHOPPING CART =====");
        console.log("1. Add Product");
        console.log("2. View Cart");
        console.log("3. Remove Product");
        console.log("4. Checkout");
        console.log("5. Exit");

        let option = prompt("Choose an option")
        option = option.trim();
        option = option.toLowerCase();
        if (option === "exit"){
                console.log("Thank You For Visiting Us");
                break;
        } 
        else if (option === "add product") {
                let product = prompt("Please enter product name");
                product = product.trim();
                product = product.toUpperCase()
                while (product === ""){
                        console.log("Invalid product name. Please try again");
                        product = prompt("Please enter product name");
                        product = product.trim();
                        product = product.toUpperCase()
                }
                let stars = parseInt(prompt("Enter the Quality Stars 1-5"));
                while(stars > 5 || stars < 1){
                        console.log("Invalid Star numbers. Please try again");
                        stars = parseInt(prompt("Enter the Quality Stars 1-5"));
                }
                let price = stars * 100;
                cart.push([product, stars, price]);
                console.log("Product Added")
        }
        
        
        else{
                console.log("Feature not implemented yet.")
        }
}






//ROUGH WORK


console.log(stars)