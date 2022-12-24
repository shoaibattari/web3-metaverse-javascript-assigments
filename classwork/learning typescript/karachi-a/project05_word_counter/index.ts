import inquirer from "inquirer";
import chalk from 'chalk';

console.clear()
console.log(chalk.greenBright("WELLCOME TO WORDS AND CHARACTER COUNTING APPLICATION"));
console.log(chalk.greenBright("CREATE BY SHOAIB MEMON"));


const userDataInput: { userdata: string } = await inquirer.prompt([
    {
        name: "userdata",
        type: "input",
        message: "enter your text"
    }
])

let userData: string = userDataInput.userdata;

console.log
chalk.blueBright(("userdata: " + userData));

// // //function create words count

function wordsCounter() {
    let wordsCounter = userData.split(" ").filter(function (element) {
        return element !== ""
    })
    console.log(chalk.blueBright(`Total words Is:  ${wordsCounter.length}`));
}
wordsCounter()

// // function create character counting
function characterCounter() {
    let i = 0;
    let newString = ''
    while (i < userData.length) {
        if (userData[i] != " ") {
            newString = newString + userData[i]
        } i++}
    console.log(chalk.blueBright(`Total Character Is: ${newString.length}`));
}
characterCounter()

