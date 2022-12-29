#!/usr/bin/env node


import inquirer from "inquirer"
import chalk from 'chalk'
console.clear()

console.log(chalk.greenBright("------------WELLLCOME TO SHOAIB CURRENCY EXCHANGE------------"));

console.log(chalk.green(
    `
    
    TODAY CURRENCY RATES IN PKR = PAK RUPEES
SAR = SAUDI RIYAL = 60.25
GBP = POUND STERLING = 273.30
USD = UNITED STATES DOLLAR = 226.55
`));

let Converter = {
    "PKR": {
        "USD": 0.0044140366365041,
        "GBP": 0.0036589828027808,
        "SAR": 0.016597510373444,
        "PKR": 1
    },
    "SAR": {
        "USD": 3.760165975103734,
        "GBP": 4.536099585062241,
        "SAR": 1,
        "PKR": 60.25
    },
    "GBP": {
        "USD": 1.206356212756566,
        "GBP": 1,
        "PKR": 273.30,
        "SAR": 4.536099585062241
    },
    "USD": {
        "USD": 1,
        "GBP": 0.8289425539699963,
        "PKR": 226.55,
        "SAR": 3.760165975103734
    }
}
console.log(`TODAY CURRENCY RATES IN PKR `);

async function App(){
let user: {
    from: "PKR" | "GBP" | "USD" | "SAR",
    to: "PKR" | "GBP" | "USD"| "SAR",
    amount: number
} = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "GBP", "USD", "SAR"],
        message: "SELECT YOUR CURRENCY"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "GBP", "USD", "SAR"],
        message: "SELECT YOUR CONVERSION CURRENCY"
    },
    {
        type: "number",
        name: "amount",
        message: "ENTER YOUR CONVERSION AMOUNT"
    }
])

const { from, to, amount } = user;
if (from && to && amount) {
    let results = Converter[from][to] * amount;
    let result = results.toFixed(2)
    console.log(
        chalk.blueBright(`YOUR CONVERSION FROM ${from} to ${to} IS ${result}`));
    restartApp()
} else {
    console.log("invalid Inputs");

}}
App()



async function restartApp() {
    let req = await inquirer.prompt([{
        name: 'user',
        type: 'list',
        message: "DO YOU WANT TO MORE CURRENCY EXCHANGE????",
        choices: [
            'Yes',
            'No'
        ]

    }]);

    let user_req = req.user;

    if (user_req === 'Yes') {
        console.clear()
        App()
    }
    else if (user_req === 'No') {
        console.log(chalk.greenBright('        .......THANKS FOR USE CURRENCY EXCHANGE APP........      '));

    }
};