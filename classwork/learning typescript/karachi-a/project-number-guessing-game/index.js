"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let chances = 5;
let rdnumber = Math.round(Math.random()) * 10;
console.log(rdnumber);
function userNumber(input) {
    if (input === rdnumber) {
        console.log(`your number is ${input} match found`);
    }
    else {
        console.log(`your number is ${input} not match found`);
    }
}
userNumber(1);
async function userinput() {
    let user = await inquirer_1.default.prompt([
        {
            name: "userNumber",
            type: "Number",
            Message: 'Enter your guess number'
        }
    ]);
}
