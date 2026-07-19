let participants = ["Steve", "Vinh", "Elon", "Shraddha", "Jensen", "Satya"]
let count = 3;

console.log("The Winner Is...")
let id = setInterval(()=>{
    
    console.log(count)
    count--
    if(count === 0){
        clearInterval(id)
        console.log(`${participants[Math.floor(Math.random()*participants.length)]}!`)
    }
}, 1000)