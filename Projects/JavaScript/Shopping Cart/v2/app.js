// const formatText = (text) => {
//   return text.trim().toLowerCase();
// };

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

let running = true;

while (running) {
  switch (displayMenu()) {
    case 5:
      console.log("Thank You for Visiting Us");
      running = false;
      break;
    case 1:
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
