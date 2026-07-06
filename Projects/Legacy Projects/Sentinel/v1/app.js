let submissions = [];


while(true){
        console.log("======Sentinel Prototype 0======");
        console.log("Submit Project");
        console.log("View Submissions");
        console.log("Review Submission");
        console.log("Exit");
        let option = prompt("Enter your option");
        option = option.trim();
        option = option.toLowerCase();


        if(option === "exit"){
                console.log("Trust Begins With Truth.")
                break;
        }
        else if(option === "submit project"){
                let creatorName = prompt("Enter Your Creator Name");
                creatorName = creatorName.trim();
                creatorName = creatorName.toUpperCase();
                while(creatorName === ""){
                        console.log("Invalid Creator Name. Please try again");
                        creatorName = prompt("Enter Your Creator Name");
                        creatorName = creatorName.trim();
                        creatorName = creatorName.toUpperCase();
                }
                let title =  prompt("Work Title");
                title = title.trim();
                title = title.toUpperCase();
                while(title === ""){
                        console.log("Invalid Title. Please try again");
                        title =  prompt("Enter Valid Title");
                        title = title.trim();
                        title = title.toUpperCase();
                }
                let description =  prompt("Description");
                description = description.trim();
                // description = description.toUpperCase();
                while(description === ""){
                        console.log("Invalid Description. Please try again");
                        description =  prompt("Please Enter Valid Description");
                        description = description.trim();
                        // description = description.toUpperCase();
                }
                let submission = {};
                submission.creatorName = creatorName;
                submission.title = title;
                submission.description = description;
                submission.status = "Submitted";
                submissions.push(submission)
                console.log("Project submitted successfully.")
                console.log("Submission Preview");
                console.log("Creator: ", submission.creatorName);
                console.log("Title: ", submission.title);
                console.log("Description: ", submissiondescription);
                console.log("Status:", submission.status);
                console.log("Waiting for review...")
        }
        else{
                console.log("Feature not implemented yet.")
        }
}