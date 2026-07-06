let submissions = [];


while(true){
        console.log("======Sentinel Prototype 0======");
        console.log("Submit Project");
        console.log("Review Submissions");
        console.log("View All Submissions");
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
                submissions.push(submission);
                console.log("Project submitted successfully.");
                console.log("Submission Preview");
                console.log("Creator: ", submission.creatorName);
                console.log("Title: ", submission.title);
                console.log("Description: ", submission.description);
                console.log("Status:", submission.status);
                console.log("Waiting for review...");
        }
        else if(option === "review submission"){
                if(submissions.length === 0){
                        console.log("No Submissions Available for Review");
                }
                else{
                        console.log("Available Submissions");
                        for(let i=0; i<submissions.length; i++){
                                console.log(`${i + 1}. ${submissions[i].title}`);
                        }
                        
                        let choice = parseInt(prompt("Choose Submission Number"))
                        while(choice > submissions.length || choice < 1){   
                                console.log("Invalid Number.");
                                choice = parseInt(prompt("Please Enter Submission Number"))
                        }

                        let selectedSubmission = submissions[choice - 1];
                        let reviewerName = prompt("Enter Your Reviewer Name");
                        reviewerName = reviewerName.trim();
                        reviewerName = reviewerName.toUpperCase();
                        while(reviewerName === ""){
                                console.log("Invalid Reviewer Name. Please try again");
                                reviewerName =  prompt("Enter Valid Name");
                                reviewerName = reviewerName.trim();
                                reviewerName = reviewerName.toUpperCase();
                        }
                        let decision = prompt("Enter Decision: approve/reject/further review needed");
                        decision = decision.trim();
                        decision = decision.toUpperCase();
                        // while(decision === ""){
                        //         console.log("Invalid decision. Please try again");
                        //         decision =  prompt("Enter Valid Decision");
                        //         decision = decision.trim();
                        //         decision = decision.toUpperCase();
                        // }
                        while (
                            decision !== "APPROVE" &&
                            decision !== "REJECT" &&
                            decision !== "FURTHER REVIEW NEEDED"
                        ) {
                            console.log("Invalid decision. Please try again");
                            decision = prompt("Enter Valid Decision");
                            decision = decision.trim();
                            decision = decision.toUpperCase();
                        }
                        
                        let comment = prompt("Enter Your Comment");
                        comment = comment.trim();
                        
                        while(comment === ""){
                                console.log("Invalid comment. Please try again");
                                comment =  prompt("Enter Valid Comment");
                                comment = comment.trim();
                        }
                        let review = {};
                        review.reviewerName = reviewerName;
                        review.decision = decision;
                        review.comment = comment;
                        selectedSubmission.review = review;
                        selectedSubmission.status = decision;
                        console.log("Review submitted successfully.");
                        console.log("Preview Summary");
                        console.log("Reviewer: ", review.reviewerName)
                        console.log("Decision: ", review.decision)
                        console.log("Comment: ", review.comment)
                }
        }
                
        else if (option === "view all submissions"){
                if(submissions.length === 0){
                        console.log("No Submitted Submissions");
                }
                else{
                        console.log("Submissions");
                        for(let i=0; i<submissions.length; i++){
                                console.log(`${i + 1}. ${submissions[i].title}`);
                        }
                        
                        let choice = parseInt(prompt("Choose Submission Number"))
                        while(choice > submissions.length || choice < 1){   
                                console.log("Invalid Number.");
                                choice = parseInt(prompt("Please Enter Submission Number"))
                        }
                        let selectedSubmission = submissions[choice - 1];
                        console.log("=======Submission Details======")
                        console.log("Creator: ", selectedSubmission.creatorName);
                        console.log("Title: ", selectedSubmission.title);
                        console.log("Description: ", selectedSubmission.description);
                        console.log("Status:", selectedSubmission.status);
                        if (selectedSubmission.review === undefined){
                                console.log("Not Reviewed Yet")
                        }else{
                                console.log("Reviewer: ", selectedSubmission.review.reviewerName)
                                console.log("Decision: ", selectedSubmission.review.decision)
                                console.log("Comment: ", selectedSubmission.review.comment)
                        }
                }
        }
        else{
                console.log("Feature not implemented yet.")
        }
}


let arr = [{a:'a', b:'b', c:{d:'d'}}];
console.log(arr[0][5])