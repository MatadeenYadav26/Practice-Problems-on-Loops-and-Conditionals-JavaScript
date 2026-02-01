// Question-7 : Print voting eligibility

// let user = prompt("What is you age: ")
// if(user === null){
//     console.error("You pressed cancel")
// }
// else{
//     if(user.trim() === ""){
//         console.error("Please input something.")
//     }
//     else{
//     user = Number(user)
//         if (isNaN(user)){
//             console.log("Pleasse enter a Number...")
//         }
//            else{
//             if(user<0){
//                 console.error("Invalid Age.")
//             }
//             else if(user >=18){
//                 console.log("You are eligible to vote!")
//             } 
//              else{
//                  console.log(`You are in-eligible to vote.you are ${user}.`)
//              }
//             }
//     }
// }
// Shortend by GPT : 
// let user = prompt("What is your age:");
// if (user === null) {
//     console.error("You pressed cancel");
// } else if (user.trim() === "") {
//     console.error("Please input something.");
// } else {
//     user = Number(user);

//     if (isNaN(user)) {
//         console.error("Please enter a number.");
//     } else if (user < 0) {
//         console.error("Invalid age.");
//     } else if (user >= 18) {
//         console.log("You are eligible to vote!");
//     } else {
//         console.log(`You are ineligible to vote. You are ${user}.`);
//     }
// }


// Question-08 : Print table of 5 or :
// for(i=1;i<11;i++){
//     console.log(`5 X ${i} = ${5*i}`)
// }

// Question-09 : Count How many numbers b/w 1-15 are greater than 8: Loop and count conditionally
// count = 0;

// for (i=1;i<16;i++){
//     if(i>8){
//         count++;
//     }
// }

// console.log(count);

// 2.

// count = 0;

// for (i=1;i<16;i++){
//     if(i>8){
//         ++count;
//         console.log(`${i}`);
//         console.log(count);
//     }
// }

// console.log(count);

// 3. if count inside the loop:


// for (i=1;i<16;i++){
//     count = 0;
//     if(i>8){     //here value of count gets refresh or updated to 0 again and again that is why we only get 1 everytime.
//         count++;
//     }
// }

// console.log(count);

// Question-10 : Ask user for passwordand check access status: 

// let password = "Password";

// let pass = prompt("Input your password.")

// if (pass === null){
//     console.error("You pressed Cancel.")
// }
// if(pass === password){
//     console.log("Matched!")
// }
// else{
//     console.log("Access Denied , Wrong Password!")
// }


// Level - 2 : Questions : Little Tougher but Logical

