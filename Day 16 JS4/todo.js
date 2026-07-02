let todo = [];

let req = prompt("Please enter your req")

while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }

    if (req =="list"){
        console.log("--------------")
        for(task of todo){
            console.log(task);
        }
        onsole.log("--------------")
        
    } else if (req == "add"){
        let task = prompt("Please enter your task")
        todo.push(task)
        console.log("task added")
    }
}


console.log(tasks)