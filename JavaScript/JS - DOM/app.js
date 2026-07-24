// let smallImages = document.getElementsByClassName("oldImg");

// for(let i=0; i<smallImages.length; i++){
//     smallImages[i].src = "assets/spiderman_img.png"
//     console.log(`Value of image no. ${i} id changed.`)
// }

// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector("p"));
// console.dir(document.querySelectorAll("div"));

let links = document.querySelectorAll(".box a")

for(link of links){
    link.style.color = "red";
}

// for(let i=0; i<links.length; i++){
//     links[i].style.color = "red";
// }