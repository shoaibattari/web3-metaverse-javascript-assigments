"use strict";
// import inquirer from 'inquirer';
Object.defineProperty(exports, "__esModule", { value: true });
// let chances = 5;
let rdnumber = Math.floor(Math.random() * 11);
console.log(rdnumber);
function match(input) {
    if (input === rdnumber) {
        console.log(`your number is ${input} match found`);
    }
    else {
        console.log(`your number is ${input} not match found`);
    }
}
match(1);
// async function userinput(){
// let user = await inquirer.prompt([
//     {
// name: "userNumber",
// type: "Number",
// Message: 'Enter your guess number'
//     }])
// }
