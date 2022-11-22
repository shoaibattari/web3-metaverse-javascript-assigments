import inquirer from 'inquirer';
let question = await inquirer.prompt([{
        name: 'number1',
        type: 'number',
        message: 'enter first number'
    },
    {
        name: 'number2',
        type: 'number',
        message: 'enter second number'
    },
    {
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
if (operator === "+") {
    console.log(num1 + num2);
}
else if (operator === "-") {
    console.log(num1 - num2);
}
else if (operator === "*") {
    console.log(num1 * num2);
}
else if (operator === "/") {
    console.log(num1 / num2);
}
;
