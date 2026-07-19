//Reminder Scheduler
let tasks = [];
let reminders = parseInt(prompt("How many reminders?"));


for(let i=0; i<reminders; i++){
    let taskName = prompt("Enter Task")
    let taskTime = parseInt(prompt("Time of the task"))
    tasks.push({
        reminder: taskName,
        delay: taskTime
    })
}

for(let i=0; i<reminders; i++){
    setTimeout(() => {
        console.log(tasks[i].reminder)
    }, tasks[i].delay * 1000);
}




// for(let i=0; i<tasks.length; i++){
//     setTimeout(() => {
//         displayTask()
//     }, tasks[i].delay * 1000);
// }




// console.log(`${taskName}`);
// console.log(`${taskName}`);
//     console.log("Delay:", taskTime)



