#! usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "Userguessednumber",
        type: "number",
        message: "Please guess a number between 1-10",
    },
]);
if (answers.Userguessednumber === randomNumber) {
    console.log("Congratulations! You guessed write number.");
}
else {
    console.log("You guessed wrong number");
}
