const program = require("commander");
const { addCustomer, findCustomer } = require("./index");
const { prompt } = require("inquirer");

// Questions
const questions = [
    {
        type: "input",
        name: "firstName",
        message: "What is the customer's first name?",
    },
    {
        type: "input",
        name: "lastName",
        message: "What is the customer's last name?",
    },
    {
        type: "input",
        name: "phone",
        message: "What is the customer's phone number?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the customer's email address?",
    },
];

program.version("1.0.0").description("Customer CLI");

// program
//     .command("add <firstName> <lastName> <email> <phone>")
//     .alias("a")
//     .description("Add a new customer")
//     .action((firstName, lastName, email, phone) => {
//         addCustomer({ firstName, lastName, email, phone });
//     });

program
    .command("add")
    .alias("a")
    .description("Add a new customer")
    .action(() => {
        prompt(questions).then((answers) => addCustomer(answers));
    });

program
    .command("find <name>")
    .alias("f")
    .description("Find a customer")
    .action((name) => {
        findCustomer(name);
    });

program.parse(process.argv);
