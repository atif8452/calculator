#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstnumber" },
  { message: "enter second number", type: "number", name: "secondnumber" },
  {
    meassge: "select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["addition", "substration", "multiaplication", "division"],
  },
]);
console.log(answer);

//conditional statement

if (answer.operator === "addition") {
  console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operator === "substration")
 { console.log(answer.firstnumber - answer.secondnumber)
} else if(answer.operator === "multiaplication"){
    console.log(answer.firstnumber * answer.secondnumber)
} else if  (answer.operator === "division"){
    console.log(answer.firstnumber / answer.secondnumber)
} else {
    console.log("please select valid operator")
}
