import inquirer from 'inquirer';
import Choice from 'inquirer/lib/objects/choice.js';

async function calc(){
let question = await inquirer.prompt(
    [
        {
            name: 'number1',
            type: 'number',
            message: 'enter first number'
        },
        {
            name: 'number2',
            type: 'number',
            message: 'enter second number'
        }, {
            name: "option",
            type: "list",
            message: "choose your actions",
            choices: [
                '+',
                '-',
                '*',
                '/'
            ]
        }

    ]);

let num1 = question.number1;
let num2 = question.number2;
let operator = question.option;

switch (operator) {
    case '+':
        console.log(`your answer is ${num1} + ${num2} = ${num1 + num2}`);
        break;
    case '-':
        console.log(`your answer is ${num1} - ${num2} = ${num1 - num2}`);
        break;
    case '*':
        console.log(`your answer is ${num1} * ${num2} = ${num1 * num2}`);
        break;
    case '/':
        console.log(`your answer is ${num1} / ${num2} = ${num1 / num2}`);
        break;
    default:
        break;
}};


calc()