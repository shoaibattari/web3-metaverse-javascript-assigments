import inquirer from 'inquirer';


let rdnumber:number = Math.round(Math.random())*10
console.log(`system number is ${rdnumber}`);

async function userinput(){
    let user = await inquirer.prompt([
        {
    name: "userNumber",
    type: "Number",
    Message: 'Enter your guess number'
        }])
    }
    


function match(userNumber:number){
    if(userNumber === rdnumber){
        console.log(`your number is ${userNumber} match found`);
        } else{
            console.log(`your number is ${userNumber} not match found`);
           }
}



match(1);

