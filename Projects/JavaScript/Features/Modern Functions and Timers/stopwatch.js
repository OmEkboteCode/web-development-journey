let count = 0;

let id = setInterval(()=>{
    console.log(count);
    count++
    if(count === 100000){
        clearInterval(id)
    }
}, 1000)