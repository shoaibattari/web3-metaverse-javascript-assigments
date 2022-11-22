// import a from './first.js';
// import {b,c} from './second.js'

// console.log(a+b+c);

import inquirer from "inquirer";
import chalk from "chalk"

let answers = await inquirer.prompt([
    {
        name: 'age',
        type: "number",
        message: "Enter Your Age"}   
])
console.log(chalk.greenBright("Insha Allah, in " + chalk.yellowBright(60 - answers.age) + " years you will be 60 years old."));

