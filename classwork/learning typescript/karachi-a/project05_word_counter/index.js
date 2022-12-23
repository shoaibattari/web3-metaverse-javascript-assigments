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
// //function create words count
function wordsCounter() {
    let wordsCounter = userData.trim().split(" ");
    let dataClean = wordsCounter.filter(function (element) {
        return element !== "";
    });
    console.log(chalk.blueBright(`Total words Is:  ${dataClean.length}`));
}
wordsCounter();
// character counting
function characterCounter() {
    let characterCounter = userData.trim();
    console.log(chalk.blueBright(`Total Character Is: ${characterCounter.length}`));
}
characterCounter();
