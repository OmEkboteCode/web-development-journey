let countdown = parseInt(prompt("Enter the countdown time"));



let id = setInterval(()=>{
    console.log(countdown);
    countdown--
    if(countdown === 0){
        clearInterval(id)
        console.log("Time's UP!")
    }
    
}, 1000)

