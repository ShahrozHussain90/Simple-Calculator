#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
{message: "enter your first number", type: "number", name: "FirstNumber",},
{message: "enter your second number", type: "number", name: "SecondNumber",},
{message: "select one of the operator to perform operation", type: "list", name: "operator",
choices: ["Addition","Subtraction","Multiplication","Division",]},
])

//Conditional Statement,
if(answer.operator === "Addition"){
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if(answer.operator === "Subtraction"){
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if(answer.operator === "Multiplication"){
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if(answer.operator === "Division"){
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else{console.log("select a valid operator")};