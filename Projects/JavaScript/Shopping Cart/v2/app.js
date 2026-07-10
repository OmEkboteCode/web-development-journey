let cart = [];


const formatText = (text) => {
  return text.trim().toUpperCase();
};

let displayMenu = () => {
  console.log(
    `=====Shopping Cart V2======
    1. Add Product
    2. View Cart
    3. Remove Product
    4. Checkout
    5. Exit`,
  );
  let option = parseInt(prompt("Choose an option:"));
  return option;
};

//Feature Functions
function addProduct(){
    let productName = prompt("Enter Product Name");
        productName = formatText(productName);
        while (productName === ""){
            console.log("Invalid product name. Please try again.")
            productName = prompt("Enter Product Name");
            productName = formatText(productName);
        }
    let stars = parseInt(prompt("Enter the Quality Stars 1-5"));
        while(stars > 5 || stars < 1){
            console.log("Invalid Star numbers. Please try again");
            stars = parseInt(prompt("Enter the Quality Stars 1-5"));
            
        }
        let price = stars * 100;
        cart.push(
            {
                name: productName,
                stars: stars,
                price: price
            }
        );
        console.log(`${productName} added successfully`)
}


let running = true;

while (running) {
  switch (displayMenu()) {
    case 5:
      console.log("Thank You for Visiting Us");
      running = false;
      break;
    case 1:
        addProduct()
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    default:
      console.log("Invalid Option. Please try again");
      break;
  }
}
