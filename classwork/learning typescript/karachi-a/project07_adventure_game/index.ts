#! /usr/bin/env node
console.clear()
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation"
import chalk from 'chalk'



const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000)
    })
}
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow(`Welcome to Shoaib Colour Guess Game
                                    create by Shoaib Memon`);

    await sleep();
    rainbowTitle.stop();



}

await welcome()

var playerLife: number = 3;

var playerscore:number = 0;



async function AskQuestion() {
    do {
        let colour: string[] = ["red", "blue", "green", "yellow", "orange"]
        var rdnumber: number = Math.floor(Math.random() * 5 + 1)
        var rdcolour: string = (colour[rdnumber]);
        console.log(chalk.greenBright(`your score is ${playerscore}`));



        var usernumber = await inquirer.prompt([{
            name: 'user',
            type: 'list',
            message: 'select any colour ',
            choices: ["red", "blue", "green", "yellow", "orange"]
        }
        ])


        if (usernumber.user === rdcolour) {
            console.clear()
            playerscore = playerscore+5;

            console.log(chalk.greenBright(`your score is ${playerscore}`));
            
            console.log(chalk.green(`
            "CONGRATULATION "YOU ARE WIN"
                        YOU GUESS THE RIGHT COLOUR`));

        } 
        else {
            playerLife--
            console.log(chalk.redBright(`
                "sorry best of luck" your life remaining is ${playerLife}`));
        }
        

    } while (playerLife > 0 && usernumber.user !== rdcolour);
    if (playerLife == 0) {
        console.clear()
        console.log(chalk.redBright(`
                .........GAME OVER.......`))
    };
    restart()
    playerLife = 3;
    // playerscore = playerscore+5;

}
AskQuestion()

// restart game functionality


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
        console.log(chalk.greenBright(`your score is ${playerscore}`));
        console.log(chalk.green('thankyou for play this game'));
 }
};