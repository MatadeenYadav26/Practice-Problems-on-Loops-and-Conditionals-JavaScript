// Problems: Level-1 : Pure Begginer Practice

// 1: print numbers from 1 to 10: 
for(i=1 ; i<11;i++)
    console.log(i);

// 2: print only even numbers :
for (i=0;i<11;i++)
    if(i%2 === 0){
        console.log(i)
    }

//  3: Print from 10 to 1 :
for (i=10;i>0;i--)
    console.log(i)

// 4. Print the word "Yes" 5 times repeat using loop:
for (i=1;i<6;i++)
    console.log("Yes")

// 5. Check if number is even or odd & print "Even" or "Odd" btwn 1-10:
for (i=1;i<11;i++)
    if(i%2 === 0){
        //    console.log(i)
        console.log(`${i} - Even`)
    }
    else{
        //    console.log(i)
        console.log(`${i} - Odd`)
    }

// 6.Ask user for a number and tell is it's positive or negative , use : use prompt() and conditionals:

let input = +prompt("Enter a Number");
// console.log(typeof input)
if (input > 0){
    console.log("Positive")
}
if (input === 0){
    console.log("Zero")
}
if(input < 0){
    console.log("Negative")
}

// Prompt se kuch bhi mango vo humesha String deta hai , therefore we use Number(prompt()) 
// convert string to a number : parseInt("") or Number()
// + sign ahead of prompt() , +prompt() : will convert string to number. 
// Jab bhi prompt se kuch mangoge toh socho kya vo , ek number hai ? Agar hai toh usko convert karna padega

// - Number()
// - parseInt("")
// - +

// 7. Ask user ki age and check if her is eligible to vote or not :

let age = prompt("Input your age: ")
if (age === null){
    console.error("You presses Cancel.")
}
if(age >= 18){
    console.log("Your are eligible.")
}
else{
    console.log("Ineligible")
}

// leading spaces
// Training Spaces
// .trim() : it trims down all the leading and training spaces , it doesn't removes the in btwn spaces only start and ones.

// sir: 
// NaN === Nan -> false
// isNaN(NaN) -> true

let age = prompt("Age Batao: ");

if (age === null){
    console.error("You Cancelled it.")
}
else{ if (age.trim()  === ""){
    console.error("b*** Dhang se Likhle.");
}
    else{
        age = Number(age.trim());

    if(isNaN(age)){
        console.error("Please input a Number.");
    }
    else{
        console.log(age);
    }
    }
}