// let n = parseInt(prompt("Enter any number"))

// for(let i = 3; i<=n; i+=3){
//     console.log(i);
// }

// let words = ["JavaScript", "HTML", "CSS", "React", "Node"];

// console.log(words.join(" "))

// console.log(words.length)

// for(let word of words){
//     if (word.length > 4){
//         console.log(word)
//     }
// }

// for(let word of words){
//     console.log(word);
// }

// let matrix = [
//     ["🍎", "🍌", "🍇"],
//     ["🥭", "🍍", "🍉"],
//     ["🍒", "🥝", "🍓"]
// ];

// for(rows of matrix){
//     console.log(rows[2])
        
// }
// for(rows of matrix){
//     for (let i = 0; i<rows.length; i++){
//         console.log(rows[i])
//     }
        
// }

let scores = [82, 45, 91, 67, 100, 58];

let i = 0;
for(let score of scores){
    if (score >= 60){
        console.log(score)
        i += 1
        
    }
    
}

console.log(`Passed: ${i}`)

EL: Accumulation variables are created before the loop/conditions, updated inside them, and used after the loop. This pattern is the same in Python and JavaScript.