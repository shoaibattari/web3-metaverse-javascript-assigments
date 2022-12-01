import inquirer from 'inquirer';

async function calc() {
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

    let num1: number = question.number1;
    let num2: number = question.number2;
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
    }

    restart()
};
calc()

async function restart(){
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

if(user_req === 'Yes'){
console.clear()
    calc()}

}