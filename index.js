const mongoose = require("mongoose");

// Map global promises - get rid of warning
mongoose.Promise = global.Promise;

// Connect to mongoose and set connection variable
const db = mongoose.connect("mongodb://localhost:27017/customerDB", {
    useNewUrlParser: true,
});

// Import customer model
const Customer = require("./models/customer");

// Add new customer
const addCustomer = (customer) => {
    Customer.create(customer)
        .then((customer) => {
            console.log("Customer added: ", customer);
            db.close();
        })
        .catch((err) => {
            console.log("Error: ", err);
        });
};

// Find customer
const findCustomer = (name) => {
    // Make case insensitive
    const query = new RegExp(name, "i");
    Customer.find({ $or: [{ firstName: query }, { lastName: query }] })
        .then((customer) => {
            console.log("Customer found: ", customer);
            console.log(`${customer.length} matches`);
            db.close();
        })
        .catch((err) => {
            console.log("Error: ", err);
        });
};

// Export all methods
module.exports = {
    addCustomer,
    findCustomer,
};
