import inquirer from "inquirer";
import chalk from "chalk";
console.clear();
console.log(chalk.greenBright("Todo App create by 'SHOAIB MEMON' "));
let TASKS = [];
async function App() {
    const Todos = await inquirer.prompt([
        {
            name: "App",
            type: "list",
            message: "Please select your operation",
            choices: [
                "AddTasks", "AllTasks", "deleteTask", "exit",
            ]
        }
    ]);
    if (Todos.App === "AddTasks") {
        addTasks();
    }
    else if (Todos.App === "AllTasks") {
        console.clear();
        allTasks();
    }
    else if (Todos.App === "deleteTask") {
        deleteTask();
    }
    else if (Todos.App === "exit") {
        console.log(chalk.yellow("THANKS FOR USE TODO APP"));
    }
}
async function addTasks() {
    const Todos = await inquirer.prompt([
        {
            name: "AddTask",
            type: "input",
            Message: "please add todo"
        },
    ]);
    TASKS.push(Todos.AddTask);
    App();
}
async function allTasks() {
    if (TASKS.length > 0) {
        console.log(chalk.green("YOUR ALL TASKS"));
        TASKS.map((todo) => {
            console.log(chalk.blueBright(`Task# ${TASKS.indexOf(todo) + 1}:  ${todo}`));
        });
    }
    else {
        console.log(chalk.redBright("NO TASKS FOUND"));
    }
    App();
}
async function deleteTask() {
    const delTodos = await inquirer.prompt([
        {
            name: "deleteTask",
            type: "input",
            Message: "please add Task number for delete"
        },
    ]);
    let indNumber = delTodos.deleteTask;
    if (TASKS.length > 0) {
        TASKS.splice(indNumber - 1, 1);
    }
    else {
        console.log(chalk.redBright("NO TASKS FOUND"));
    }
    App();
}
App();
