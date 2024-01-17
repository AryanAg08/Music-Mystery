const mongo = require("mongoose");

const Login = new mongo.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

module.exports = new mongo.model("Login", Login);