#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000; // Dolar
let myPin = 1234;

const pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin code",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log(`Correctt pin code!!!`);

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select option",
      type: "list",
      choices: [`Withdraw`, `Fast Cash`, `Check Balance`],
    },
  ]);
  if (operationAns.operation == "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: `amount`,
        message: `Enter your amount`,
        type: `number`,
      },
    ]);
    myBalance -= amountAns.amount;
    if (amountAns.amount <= myBalance) {
      console.log(`Your remainig balance is ${myBalance}`);
    }else{console.log(`Insuficiant Balance`)};
    } else if (operationAns.operation == "Fast Cash") {
      let fastCash = await inquirer.prompt([
        {
          name: `amount`,
          message: `Please select the amount`,
          type: `list`,
          choices: [1000, 3000, 5000],
        },
      ]);
      myBalance -= fastCash.amount;
      console.log(`Your remainig balance is ${myBalance}`);
    } else if (operationAns.operation == "Check Balance") {
      console.log(`Your balance is ${myBalance}`);
    }else {
  console.log(`Incorrect pin code`);
}
  }
