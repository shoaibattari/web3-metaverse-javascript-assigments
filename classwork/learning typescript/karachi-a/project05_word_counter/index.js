import inquirer from "inquirer";
import chalk from 'chalk';
const userDataInput = await inquirer.prompt([
    {
        name: "userdata",
        type: "input",
        message: "enter your text"
    }
]);
let userData = userDataInput.userdata;
console.log("userdata: " + userData);
// // words count
let wordsCounter = userData.trim().split(" ");
let dataClean = wordsCounter.filter(function (elm) {
    return elm !== "";
});
console.log(chalk.blueBright(`Total words Is:  ${dataClean.length}`));
// character counting
// console.log(characterCounter);
