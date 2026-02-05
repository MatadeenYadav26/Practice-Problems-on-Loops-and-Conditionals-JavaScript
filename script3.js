// Q-19: Allow 3 withdrawls , let balance be 1000 , ask withdrawl amonts 3 times , if enough balance deduct , else print insufficient balance:

// let balance = 1000;
// let deducted = 0;
// for(i=1;i<=3;i++){
//     let withdrawl = +prompt("Tell withdrawl amount: ")
//     deducted += withdrawl;
//     balance -= withdrawl;
// }
// if(balance>=0){
//     console.log(`${deducted} Amount deducted.`)
// } 
// else{
//     console.log("Insufficient Balance.")
// }

// let balance = 1000;
// let flag = false;
// let counter = 0;
// while(balance>0 && counter !==3){
//     let withdrawl = +prompt("Kitna paisa nikalna hai: ");
//     counter++;
//     if(withdrawl<=balance){
//         balance -= withdrawl;
//     }
//     else{
//         flag = true;
//         break;
//         }

// }

// if(flag===true){
//     console.log("Insufficient Balance.")
// }

// GPT: Cleaner and Shorter Code :-
// let balance = 1000;
// let attempts = 0;

// while (balance > 0 && attempts < 3) {
//     let withdraw = +prompt("Kitna paisa nikalna hai:");
//     attempts++;

//     if (withdraw > balance) {
//         console.log("Insufficient Balance.");
//         break;
//     }

//     balance -= withdraw;
// }

// Do-While Loop
// let i = 1;
// do{
//     console.log(i);
//     i++;
// } while(i<11);

// Recursion in Javascript:
// function abcd(){
//     console.log("Recursion");
//     abcd();
// }

// abcd();

// function abcd(n){
//     if(n === 0) return;
//     console.log(n);
//     abcd(n-1);    
// }

// abcd(5);


// Loop Conditionals : Continue
// for(let i = 1;i = 10;i++){
//     if(i == 5) continue;
//     console.log(i);
// }


// functions in Javascript:

// function sexkarna(){
//     console.log("1.Kapde Utaro")
//     console.log("2.For-Play Karo")
//     console.log("3.Use Protection")
//     console.log("4.Get into the right hole.")
//     console.log("5.Go Slow , Go Deep , Go Better")
//     console.log("6.Have a Great Blast")
//     console.log("7.Stay Together , Have a moment...")
//     console.log("7.Happy Ending")
// }

// sexkarna()

// function dosomething(Name,Age,email){
    // console.log(Name,Age,email);
//     console.log(arguments);

// }
// dosomething("Aman",21,"aman@gmail.com");
