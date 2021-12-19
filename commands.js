const program = require("commander");
const { addCustomer, findCustomer } = require("./index");

program.version("1.0.0").description("Customer CLI");

program
    .command("add <firstName> <lastName> <email> <phone>")
    .alias("a")
    .description("Add a new customer")
    .action((firstName, lastName, email, phone) => {
        addCustomer({ firstName, lastName, email, phone });
    });

program
    .command("find <name>")
    .alias("f")
    .description("Find a customer")
    .action((name) => {
        findCustomer(name);
    });

program.parse(process.argv);
