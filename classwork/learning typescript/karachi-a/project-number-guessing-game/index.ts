#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation'



// const sleep = () => new Promise((res, rej) => setTimeout(res, 2000));

// async function wellcome() {
//    const rainbowTitle = chalkAnimation.rainbow('wellcome to SS number guessing game');
//     await sleep()
//     rainbowTitle.stop()
// }


// wellcome();


async function AskQuestion() {
    let rdnumber: number = Math.floor(Math.random() * 10 + 1)
    console.log(rdnumber);
    let usernumber = await inquirer.prompt([{
        name: 'user',
        type: 'number',
        message: 'select any number 1 to 10 ',
        validate: (answer: number) => {
            if (isNaN(answer)) {
                chalk.red("please enter number")
            }
            else return true;
        }
    }])
    if (usernumber.user === rdnumber) {
        console.log(chalk.green(`
        "CONGRATULATION "YOU ARE WIN"
                    YOU GUESS THE RIGHT NUMBER`));
    } else if(usernumber.user < rdnumber){
        console.log(chalk.red(`
            "sorry best of luck"
            your number is ${usernumber.user} is less than guess number`));
    }
    else if(usernumber.user > rdnumber){
        console.log(chalk.red(`
            "sorry best of luck"
            your number is ${usernumber.user} is greater than guess number `));
    }
};


AskQuestion();


