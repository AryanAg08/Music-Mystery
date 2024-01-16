const mongo = require("mongoose");
const pass = new mongo.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: false,
    },
    picture: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
});

module.exports = mongo.model("GoogleAuth", pass);