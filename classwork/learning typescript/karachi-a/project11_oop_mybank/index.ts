console.clear()
import chalk from "chalk"
import chalkAnimation from "chalk-animation"

console.clear()

const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2500)
    })
}
async function welcome() {
    let rainbowTitle2 = chalkAnimation.neon('=========>>>Welcome to SHOAIB-BANK<<<=========');


    await sleep();
    rainbowTitle2.stop();
}

await welcome()

interface BankAccount {
    AccNo: number;
    AccHolderName: string;
    Balance: number;
    BalanceCheck: () => void;
    Deposit: (amount: number) => void;
    Withdraw: (amount: number) => void;

}

class Transaction implements BankAccount {
    AccNo: number;
    AccHolderName: string;
    Balance: number;
    constructor(accno: number, name: string, bal: number) {
        this.AccNo = accno;
        this.AccHolderName = name;
        this.Balance = bal;
    }
    BalanceCheck(): void {
console.log('--------------------------COUNTER BALANCE CHECK--------------------------');
        if (this.Balance < 0) {
            console.log('Insufficient Balance Please Deposit')
        }
        else {
            console.log(chalk.green('Your Account Balance is :' + this.Balance))
        }
    }
    Deposit(amount: number): void {
console.log('--------------------------COUNTER CASH DEPOSIT--------------------------');
        this.Balance += amount;
        console.log('Amount of ' + amount + ' Deposited Successfully');
        console.log(chalk.green('Your Current Balance is :' + this.Balance))

    }
    Withdraw(amount: number): void {
console.log('--------------------------COUNTER CASH WITHDRAW--------------------------');
        if (amount > this.Balance) {
            console.log(chalk.blue('Not Enough Balance'))
        }
        else {
            this.Balance -= amount;
            console.log('Amount of ' + amount + ' withdrawn Successfully');
            console.log(chalk.yellow('Your Current Balance is :' + this.Balance))
        }

    }
}


let user1 = new Transaction(1234,"shoaibmemmon",0)
user1.BalanceCheck()
console.log();
console.log();

user1.Deposit(100000)
console.log();
console.log();
user1.Withdraw(99000)
console.log();
console.log();
user1.BalanceCheck()




