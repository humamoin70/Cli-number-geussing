import inquirer from "inquirer";
// 1) computer will generate a random number - Done.
//  2) user input for guessing number done
// 3) copmpare user input with computer generated number and show result done
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10:",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulation you guessed a right number.");
}
else {
    console.log("you guessed a wrong number.");
}
