import inquirer from "inquirer";
import chalk from "chalk"
console.clear()



console.log(chalk.greenBright("Todo App create by 'SHOAIB MEMON' "));


let TASKS: string[] = []

async function App() {
    const Todos: { App: string } = await inquirer.prompt([
        {

            name: "App",
            type: "list",
            message: "Please select your operation",
            choices: [
                "AddTasks", "AllTasks", "exit",]
        }
    ]);
    if (Todos.App === "AddTasks") {
        addTasks()
    } else if (Todos.App === "AllTasks") {
        console.clear()
        allTasks()
    }else if(Todos.App === "exit"){
        console.log(chalk.yellow("THANKS FOR USE TODO APP"))
    }
}



async function addTasks() {
    const Todos: { AddTask: string } = await inquirer.prompt([
        {
            name: "AddTask",
            type: "input",
            Message: "please add todo"
        },
    ])
    TASKS.push(Todos.AddTask);
    App()

}

async function allTasks() {
    if (TASKS.length > 0){
        console.log(chalk.green("YOUR ALL TASKS"));
        TASKS.map((todo) => {
            console.log(chalk.blueBright(todo));
        })
    } else {
        console.log(chalk.redBright("NO TASKS FOUND"));
    }
    App()

}
App()
