const mongoose = require("mongoose");

// Connection in "config"--->'mongoose_connection.js'
// mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        minLength: 2,
        trim: true,
    },
    email: String,
    password: String,
    cart: {
        type: Array,
        default: []
    },
    orders: {
        type: Array,
        default: []
    },
    contact: Number,
    picture: String,

});

module.exports = mongoose.model("user",userSchema);