#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';

interface anstype {
    userid: string,
    userpin: number,
    typeAccount: string,
    userTransaction: string,
    useramount: number,
    billid: number,
    billamount: number,
    currentBalacne: number
}

console.clear()

console.log(chalk.greenBright('   ........wellcome to SHOAIB-ATM........   '))




    const acQuestion: anstype = await inquirer.prompt([
        {
            name: "userid",
            type: "input",
            message: "please enter your ID",
        },
        {
            name: "userpin",
            type: "number",
            message: "please enter your PIN"
        },
    ]);
    const balance = Math.floor(Math.random() * 100000); 
  
  
    async function ATM() {

        const question: anstype = await inquirer.prompt([

        {
            name: "typeAccount",
            type: "list",
            message: "select account type",
            choices: ["current account", "saving account"]
        },
        {
            name: "userTransaction",
            type: "list",
            message: "select operation",
            choices: ["cash withdraw", "billpayments",],
            when(answer) {
                return answer.typeAccount
            },
        },
        {
            name: "useramount",
            type: "input",
            message: "please enter amount",
            when(answer) {
                return answer.userTransaction == "cash withdraw"
            }
        },
        {
            name: "billid",
            type: "input",
            message: "Enter your bill id",
            when(answer) {
                return answer.userTransaction == "billpayments"
            }
        },
        {
            name: "billamount",
            type: "input",
            message: "Enter your bill amount",
            when(answer) {
                return answer.billid
            }
        },
    ]);

    if (acQuestion.userid && acQuestion.userpin) {
        const cashAmont: number = question.useramount;
        const BillAmount: number = question.billamount;
        if (balance >= cashAmont) {
            console.log(`opening balance :   ${balance}`);
            console.log("cash transaction is succesful");
            console.log(`your current balance is ${balance - cashAmont}`);
            restartAtm()
        }
        else if (balance >= BillAmount) {
            console.log(`opening balance :   ${balance}`);
            console.log("your bill are paid");
            console.log(`your current balance is ${balance - BillAmount}`);
            restartAtm()
        } else (
            console.log(chalk.red('......insuficient balance.......'))

        )
    }

}

ATM()
async function restartAtm() {
    let req = await inquirer.prompt([{
        name: 'user',
        type: 'list',
        message: "do you want to more transaction????",
        choices: [
            'Yes',
            'No'
        ]

    }]);

    let user_req = req.user;

    if (user_req === 'Yes') {
        console.clear()
        ATM()
    }
    else if (user_req === 'No') {
        console.log('thankyou for use ATM');

    }
};