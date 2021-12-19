const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    phone: { type: String },
});

module.exports = mongoose.model("Customer", customerSchema);
