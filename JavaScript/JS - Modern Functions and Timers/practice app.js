
const notifier = {
    appName: "NotifyX",
    notificationsSent: 0,
    active: false,

    start() {
        console.log(`🚀 Starting ${this.appName}...`);

        this.active = true;

        setTimeout(() => {
            console.log("✅ System Ready!");

            this.beginMonitoring();
        }, 2000);
    },

    beginMonitoring() {
        const intervalId = setInterval(() => {

            if (!this.active) {
                clearInterval(intervalId);
                return;
            }

            this.notificationsSent++;

            console.log(
                `📨 Notification ${this.notificationsSent} sent`
            );

            if (this.notificationsSent === 5) {
                this.stop();
            }

        }, 1000);
    },

    stop() {

        console.log("🛑 Shutting down...");

        this.active = false;

        try {

            console.log(user.profile.name);

        } catch (err) {

            console.log("⚠️ User profile unavailable.");

        }

        console.log("Goodbye!");

    }
};

console.log("Application Opened");

notifier.start();

console.log("Waiting...");




// //1

// let num1 = 105;
// let num2 = 20;

// let largest = num1;

// let getLargest = (a, b) =>{
//     if(largest < b){
//         largest = b;
//         console.log("Largest Number is ", largest)
//     }else{
//         console.log("Largest Number is ", largest)
//     }
// }


// let getEvenCheck = (num) =>{
//     if(num%2 === 0){
//         console.log(true);
//     } else{
//         console.log(false);
//     }
// }




// const square = (num) => num * num



// let name = "Glacier";

// let greet= (name) => `Hello, ${name}!`;

// let getRandomNumber = () => {
//     console.log(Math.floor((Math.random() * 10) +1))
// }

// getLargest(num1, num2);

// getEvenCheck(num1);
// getEvenCheck(num2);

// console.log(square(num1));
// console.log(greet("glacier"))

// getRandomNumber()



//2 

// remote = {
//     brand: "Jio",
//     battery: 87,
//     power: false,
//     showStatus(){
//         console.log(this);
//         return `${this.brand} ${this.battery}% ${this.power}`;
//     },
//     togglePower(){
//         if(this.power === true){
//             return this.power = false;
//         } else{
//             return this.power = true;
//         }
            
//     },
//     testArrow: () => {
//         console.log(this);
// }
// }


//3

// console.log("🚀 Notification System Starting...")

// setTimeout(() =>{
//     console.log("✅ System Ready!")
// }, 3000)

// let count = 0;
// let id = setInterval(() => {
//     count++
//     console.log("Checking Notifications...")
//     if(count === 5){
        
//         clearInterval(id)
//         console.log("🛑 Monitoring Stopped.")
//         let getName = () =>{
//         return user.name;
//         }
//     }
// }, 2000);



// try {
//     console.log(getName())
// } catch(err){
//     console.log("⚠️ Unable to load user information.");
//     console.log(err)
// }

//4
