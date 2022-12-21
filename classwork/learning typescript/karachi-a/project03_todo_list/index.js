import inquirer from "inquirer";
let Todos = [];
let loop = true;
while (loop) {
    const userTodo = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "please add TODO name "
        },
        {
            type: "confirm",
            name: "addmore",
            message: "do you want more add TODO ",
            default: false
        }
    ]);
    const { addmore, TODO } = userTodo;
    console.log(userTodo);
    loop = addmore;
    if (TODO) {
        Todos.push(TODO);
    }
    else {
        console.log("kindly add valid input");
    }
}
console.log(Todos);
if (Todos.length > 0) {
    console.log("your TODOS is ");
    Todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("no TODOS found");
}
