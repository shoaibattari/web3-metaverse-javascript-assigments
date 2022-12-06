import inquirer from 'inquirer';


// let chances = 5;
let rdnumber:number = Math.floor(Math.random()*11)
console.log(rdnumber);


let usernumber = await inquirer.prompt([{
    name: 'user',
    type: 'number',
    message: 'enter number 0 to 10'
}])    
let usnum = usernumber.user;


function match(e: number){
    if(e=== rdnumber){
        console.log(`
        "you are win"
        your number is ${e} match`);
        } else{
            console.log(`
            "sorry best of luck"
            your number is ${e} not match`);
           }
}

match(usnum)