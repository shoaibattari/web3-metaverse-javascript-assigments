#!/usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk"
console.clear()



console.log(chalk.greenBright("Todo App create by 'SHOAIB MEMON' "));


let TASKS: string[] = []


// create function for main app section
async function App() {
    const Todos: { App: string } = await inquirer.prompt([
        {

            name: "App",
            type: "list",
            message: "Please select your operation",
            choices: [
                "AddTasks", "AllTasks", "deleteTask", "editTask", "allTasksdelete", "exit",]
        }
    ]);
    if (Todos.App === "AddTasks") {
        addTasks()
    } else if (Todos.App === "AllTasks") {
        console.clear()
        allTasks()
    } else if (Todos.App === "deleteTask") {
        deleteTask()
    } else if (Todos.App === "editTask") {
        editTask()
    } else if (Todos.App === "allTasksdelete") {
        if (TASKS.length > 0) {
            TASKS = []
            console.log("YOUR ALL TASKS DELETED");
            App()
        } else {
            console.log(chalk.redBright("NO TASKS FOUND"));

        }
    }

    else if (Todos.App === "exit") {
        console.log(chalk.yellow("THANKS FOR USE TODO APP"))
    }
}


// create function for add tasks
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

// create function for show all tasks
async function allTasks() {
    if (TASKS.length > 0) {
        console.log(chalk.green("YOUR ALL TASKS"));
        TASKS.map((todo) => {
            let tasksindex = TASKS.indexOf(todo) + 1;
            console.log(`Task#${tasksindex}:  ${todo}`);

        })
    } else {
        console.log(chalk.redBright("NO TASKS FOUND"));
    }
    App()

}

// create function for delete some tasks
async function deleteTask() {
    const delTodos: { deleteTask: number } = await inquirer.prompt([
        {
            name: "deleteTask",
            type: "input",
            Message: "please add Task number for delete"
        },
    ])
    let indNumber = delTodos.deleteTask
    if (TASKS.length > 0) {
        TASKS.splice(indNumber - 1, 1);
    } else {
        console.log(chalk.redBright("NO TASKS FOUND"));
    }
    App()
}

// create function for edit tasks
async function editTask() {
    const editTodos: { editTask: number, NewTaskName: string } = await inquirer.prompt([
        {
            name: "editTask",
            type: "input",
            Message: "please add Task number for edit"
        }, {
            name: "NewTaskName",
            type: "input",
            message: "please type edited Your new Task "
        }
    ])
    let indNumber = editTodos.editTask
    let indName = editTodos.NewTaskName
    if (TASKS.length > 0) {
        TASKS.splice(indNumber - 1, 1, indName);
    } else {
        console.log(chalk.redBright("NO TASKS FOUND"));
    }
    App()
}

App()