#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.clear();
console.log(chalk.blue("WELLCOME TO NUMBER GUESSING GAME"));
let playerLife = 3;
async function AskQuestion() {
    do {
        playerLife--;
        var rdnumber = Math.floor(Math.random() * 10 + 1);
        var usernumber = await inquirer.prompt([{
                name: 'user',
                type: 'number',
                message: 'select any number 1 to 10 ',
                validate: (answer) => {
                    if (isNaN(answer)) {
                        chalk.red("please enter number");
                    }
                    else
                        return true;
                }
            }]);
        if (usernumber.user === rdnumber) {
            console.log(chalk.green(`
            "CONGRATULATION "YOU ARE WIN"
                        YOU GUESS THE RIGHT NUMBER`));
        }
        else if (usernumber.user < rdnumber) {
            console.log(chalk.red(`
                "sorry best of luck"
                your number is ${usernumber.user} is less than guess number`));
        }
        else if (usernumber.user > rdnumber) {
            console.log(chalk.red(`
                "sorry best of luck"
                your number is ${usernumber.user} is greater than guess number `));
        }
    } while (playerLife > 0 && usernumber.user !== rdnumber);
    if (playerLife == 0) {
        console.clear();
        console.log(chalk.redBright(`
                .........GAME OVER.......`));
    }
    ;
}
AskQuestion();
