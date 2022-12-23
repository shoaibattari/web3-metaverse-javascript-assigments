#!/usr/bin/env node
console.clear();
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.green('wellcome to SS calcultor'));
console.log(chalk.greenBright('created by SHOAIB MEMON'));
async function calc() {
    let question = await inquirer.prompt([
        {
            name: 'number1',
            type: 'number',
            message: 'enter first number :'
        },
        {
            name: 'number2',
            type: 'number',
            message: 'enter second number :'
        }, {
            name: "option",
            type: "list",
            message: "choose your actions",
            choices: [
                'addition +',
                'subtraction -',
                'multiplication *',
                'division /'
            ]
        },
    ]);
    let num1 = question.number1;
    let num2 = question.number2;
    let operator = question.option;
    switch (operator) {
        case 'addition +':
            console.log(chalk.green(`your answer is ${num1} + ${num2} = ${num1 + num2}`));
            break;
        case 'subtraction -':
            console.log(chalk.green(`your answer is ${num1} - ${num2} = ${num1 - num2}`));
            break;
        case 'multiplication *':
            console.log(chalk.green(`your answer is ${num1} * ${num2} = ${num1 * num2}`));
            break;
        case 'division /':
            console.log(chalk.green(`your answer is ${num1} / ${num2} = ${num1 / num2}`));
            break;
        default:
            break;
    }
    restart();
}
;
async function restart() {
    let req = await inquirer.prompt([{
            name: 'user',
            type: 'list',
            message: "you are want use calculator",
            choices: [
                'Yes',
                'No'
            ]
        }]);
    let user_req = req.user;
    if (user_req === 'Yes') {
        console.clear();
        calc();
    }
    else if (user_req === 'No') {
        console.log(chalk.green('thankyou for use calculator'));
    }
}
;
calc();
