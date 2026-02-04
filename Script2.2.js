// Q1- Ask password 3 times to user and if correct then login else id ban 
// s1: Apna password define karo 
// let attempt = 0;
// let sahi_Password = "aman";
// s2 : User se password input lo / ek  baar password pucho:
// let userpassword = prompt("Password batao");
// attempt++;
// s3: while loop me lagao until sahi password na bataye : 
// while(sahi_Password !== userpassword){
//     if(attempt === 3){
//         console.error("Account Blocked!")
//         break;
//     };
//     userpassword = prompt("Password batao");
//     attempt++;
// }
// Method-02:
// while(sahi_Password !== userpassword  && attempt <3){
//     userpassword = prompt("Password batao");
//     attempt++;
// }
// if(attempt === 3){
//         console.error("Account Blocked!");
//     } else{
//     console.log("Account Open!")
// };


// Q2: until user says stop andbtwn it count the number of times user says "Yes" :

// let user = prompt("Word batao");
// let counter = 0;

// while (user !== "stop"){
//     if (user === "yes") counter++;
//     user = prompt("Word batao");
// }
// console.log(`User Counter is: ${counter}.`)

// Q3 : Print numbers divisible by 7  from 1 to 50 , using loop and modulo % :

// for(i=1;i<51;i++){
//     if(i%7 === 0){
//         console.log(i);
//     }
// }


// Q4: Sum of all odd numbers from 1 to 30:
// let sum = 0;
// for(i=1;i<31;i++){
//     if(i%2 != 0){
//         sum = sum+i;
//     }
// }
// console.log(sum);

// Q5 : Keep asking Number until user an even number , use while loop:
// let user = +prompt("Number batao");
// while(user%2 !== 0){
//     user = prompt("Number batao");
// }

// Q6 : Print numbers btwn 2 user inputs:
// let start = +prompt("Tell first number");
// let end = +prompt("Tell second number");

// if(start>end) console.error("Start cannot be Greater than end.");
// for(let i = start; i<=end ;i++){
//     console.log(i);
// }

// Q7 : Print only first 3 odd numbers from 1 to 20 use loop , break after first 3 odd points.
let counter = 0;

// for (i=1 ; i<21;i++){
//     if(counter === 3) break;
//     if(i%2 != 0)
//     {
//         console.log(i)
//         counter++;
//     }
// }

// Q8 : Ask user 5 numbers ,count how many of them are positive , use loop+condition+counter:
// Using while loop
// counter = 0;
// positive = 0;
// while(counter!=5){
//     let user = +prompt("Input a number");
//     counter++;
//     if(user>=0){
//         positive++;
//     }
// }
// console.log(`${positive} values are positive`);

// Using For loop
// counter = 0;
// for(i=1;i<=5;i++){
//     let user = +prompt("Input a number");
//     if(user>=0){
//         counter++;
//     }
// }
// console.log(`${counter} values are positive`);
