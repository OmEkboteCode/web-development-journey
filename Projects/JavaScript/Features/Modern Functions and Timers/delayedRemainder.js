let reminder = prompt("Enter Ramiander");
let delay = parseInt(prompt("Enter Delay"));


setTimeout(()=> {
    console.log(`Remainder: ${remainder}`);
}, delay * 1000)