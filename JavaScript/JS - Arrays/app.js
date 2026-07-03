// // let password = prompt("Enter Password")

// // // console.log(password.trim());
// // str = "String"
// let name = "ApnaCollege";

// let followers = ["Steve", "Sunny", "Jenny"]
// let blocked = followers.shift();
// let months = ["January", "July", "March", "August"]
// let emptyArray = [ ];
// let a = followers.concat(months);

// let arr = ['a', 'b'];
// let arrCopy = arr;
// let nums = [[2,3], [4,5], [6,7]];

// let sentence = prompt("Enter Sentence");

// let final = sentence.trim().replace(" ", "-").replace(" ", "-").toUpperCase();

// console.log(final)

// let fruits = ["apple", "banana", "mango", "orange"];

// fruits.splice(0, 4, "kiwi", "banana", "grapes", "orange", "pineapple");

// console.log(fruits)


// let cart = ["Milk", "Bread", "Eggs"];

// let check = cart.includes("Butter")

// if (!check){
//     cart.push("Butter")
// } else{
//     console.log("Butter is available")
// }

// // let usernames = ["  Glacier", "Shadow  ", "  Nova  ", "Phoenix"];

// // usernames[0] = usernames[0].trim().toUpperCase();
// // usernames[1] = usernames[1].trim().toUpperCase();
// // usernames[2] = usernames[2].trim().toUpperCase();
// // usernames[3] = usernames[3].trim().toUpperCase();
// // console.log(usernames)

// let library = [
//     "Harry Potter",
//     "The Hobbit",
//     "Dune",
//     "1984"
// ];

// let book = prompt("Search");
// book = book.trim().toLowerCase();
// library[0] = library[0].toLowerCase();
// library[1] = library[1].toLowerCase();
// library[2] = library[2].toLowerCase();
// library[3] = library[3].toLowerCase();

// let check = library.includes(book);

// if (check === true){
//     console.log("Book Found")
// } else {
//     console.log("Book Not Found")
// }

// let fruits = ["Apple", "Banana", "Mango", "Orange"];

// let backup = fruits.slice()



// fruits.splice(0, 1, "Kiwi")
// fruits.splice(4, 0 , "Pineapple")

// fruits.reverse()

// console.log(backup)
// console.log(fruits)

// let colors = ["Red", "Green", "Blue"];

// let copy = colors;

// copy.push("Black");

// colors.splice(1, 1);

// copy.reverse();

// console.log(colors);
// console.log(copy);

// console.log(colors === copy);
// console.log(colors.length);

// let cities = ["Delhi", "Mumbai", "Pune"];

// let backup = cities.slice();

// backup.push("Chennai");

// cities.splice(1, 1, "Bangalore");

// backup.reverse();

// if (cities.includes("Mumbai")) {
//     console.log("Mumbai Found");
// } else {
//     console.log("Mumbai Missing");
// }

// console.log(cities);
// console.log(backup);

// console.log(cities === backup);
// console.log(backup.length);

// "Mumbai Missing"

// cities : ["Delhi", "Bangalore", "Pune"]
// backup : ["Chennai", "Pune", "Mumbai", "Delhi"]
// false
// 4


// let games = ["Chess", "Cricket", "Football"];

// let archive = games.slice();

// games.push("Hockey");

// archive.splice(1, 1);

// games.reverse();

// archive.push("Tennis");

// let search = "Football";

// if (archive.includes(search)) {
//     console.log("Found in Archive");
// } else {
//     console.log("Not in Archive");
// }

// console.log(games);
// console.log(archive);

// console.log(games === archive);

// console.log(games.length);
// console.log(archive.length);

// "Found in Archive"
// ["Hockey","Football", "Cricket", "Chess"]
// ["Chess", "Football", "Tennis"]
// false
// 4
// 3


// let products = ["Laptop", "Mouse", "Keyboard"];

// let product = prompt("Product Name");

// let check = product.trim().toLowerCase();

// products[0] = products[0].toLowerCase();
// products[1] = products[1].toLowerCase();
// products[2] = products[2].toLowerCase();

// let arr = products.indexOf(check);

// if (products.includes(check)){
//     products.splice(arr, 1);
//     console.log("Product Sold");
// } else{
//     products.push(check);
//     console.log("New Product Added");
// }

// console.log(products)

// let sentence = prompt("Enter a sentence");

// let sent = sentence.trim();
// let arr = sent.split(" ");
// arr.reverse();
// let arr1 = arr.join(" ");
// let arr2 = arr1.toUpperCase();

// console.log(arr2);

// let n = 4;
// let arr = [9, 10, 8, 87, 90];

// console.log(arr.slice(-n))


let str = "ShadowSlave";
let idx = 3;
if (str[idx] == str[idx].toLowerCase()){
    console.log("lowercase character");
} else{
    console.log("not lowercase character");
}