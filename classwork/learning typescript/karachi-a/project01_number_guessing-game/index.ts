#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
console.clear()


async function wellcome() {
    const rainbow = chalkAnimation.rainbow(`
            .........WELLCOME TO SHOAIB NUMBER GUESSING GAME.........`)
        ; // Animation starts

    setTimeout(() => {
        rainbow.stop(); // Animation stops
    }, 1000);


    rainbow.start(); // Animation resumes;
}
wellcome()

let playerLife: number = 3;

async function AskQuestion() {
    console.log(chalk.redBright(`player life is ${playerLife}`));


    do {
        playerLife--

        var rdnumber: number = Math.floor(Math.random() * 10 + 1)


        var usernumber = await inquirer.prompt([{
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
            console.clear()
            console.log(chalk.green(`
            "CONGRATULATION "YOU ARE WIN"
                        YOU GUESS THE RIGHT NUMBER`));
            console.log(chalk.redBright(`player life is ${playerLife}`));


        } else if (usernumber.user < rdnumber) {
            console.log(chalk.red(`
                "sorry best of luck"
                your number is ${usernumber.user} is less than guess number`));
            console.log(chalk.redBright(`player life is ${playerLife}`));
        }
        else if (usernumber.user > rdnumber) {
            console.log(chalk.red(`
                "sorry best of luck"
                your number is ${usernumber.user} is greater than guess number `))
        }


    } while (playerLife > 0 && usernumber.user !== rdnumber);
    if (playerLife == 0) {
        console.clear()
        console.log(chalk.redBright(`
                .........GAME OVER.......`))
    };
    restart()
    playerLife = 3;
}
AskQuestion()



async function restart() {
    let req = await inquirer.prompt([{
        name: 'user',
        type: 'list',
        message: "do you want to restart game????",
        choices: [
            'Yes',
            'No'
        ]

    }]);

    let user_req = req.user;

    if (user_req === 'Yes') {
        console.clear()
        AskQuestion()
    }
    else if (user_req === 'No') {
        console.log(chalk.green('thankyou for play this game'));

    }
};


