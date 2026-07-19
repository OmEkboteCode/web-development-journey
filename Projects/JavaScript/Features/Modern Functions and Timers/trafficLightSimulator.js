
let lights = ["RED", "GREEN", "YELLOW"]

let currentIndex = 0;

setInterval(()=>{
    console.log(lights[currentIndex])
    currentIndex++
    if(currentIndex>2){
        currentIndex = 0
    }
}, 3000)






// let id = setInterval(() => {
//     // let count = 0;
//     // count++
//     // if(count === 3){
//     //     console.log(lights[0])
//     //     break
//     // }
//     // for(let count = 0; count<= 3; count++){
//     //     console.log(lights[0])
//     // }
    

// }, 3000);





// let id = setInterval(()=>{
//     while(traffic){
//         let count = 0;
//         console.log("RED")
//         if(count === 3){
//             traffic = true
//         }
//     }
// }, 3000)
// setInterval(()=>{
//     console.log("GREEN")
// }, 6000)
// setInterval(()=>{
//     console.log("YELLOW")
// }, 9000)


// while(true){
//     setInterval(()=>{
//         console.log("RED")
//     }, 3000)
