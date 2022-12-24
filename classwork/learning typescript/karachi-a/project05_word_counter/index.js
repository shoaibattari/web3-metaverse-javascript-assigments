#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
console.clear();
console.log(chalk.greenBright("WELLCOME TO WORDS AND CHARACTER COUNTING APPLICATION"));
console.log(chalk.greenBright("CREATE BY SHOAIB MEMON"));
async function App() {
    const userDataInput = await inquirer.prompt([
        {
            name: "userdata",
            type: "input",
            message: "enter your text: "
        }
    ]);
    let userData = userDataInput.userdata;
    console.log;
    chalk.blueBright(("userdata: " + userData));
    // // //function create words count
    function wordsCounter() {
        let wordsCounter = userData.split(" ").filter(function (element) {
            return element !== "";
        });
        console.log(chalk.magentaBright(`Total words Is:  ${wordsCounter.length}`));
    }
    wordsCounter();
    // // function create character counting
    function characterCounter() {
        let i = 0;
        let newString = '';
        while (i < userData.length) {
            if (userData[i] != " ") {
                newString = newString + userData[i];
            }
            i++;
        }
        console.log(chalk.magentaBright(`Total Character Is: ${newString.length}`));
    }
    characterCounter();
    Restart();
}
async function Restart() {
    const userDataRestart = await inquirer.prompt([
        {
            name: "userRestart",
            type: "list",
            message: "you are want to more use WORDS AND CHARACTER COUNTING APPLICATION",
            choices: ["Yes", "No"]
        }
    ]);
    let userReq = userDataRestart.userRestart;
    if (userReq === "Yes") {
        console.clear();
        App();
    }
    else {
        console.log(chalk.greenBright("THANKS FOR USER WORDS AND CHARACTER COUNTING APPLICATION......."));
    }
}
App();
