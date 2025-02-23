const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add the user name"]
    },
    email: {
        type: String,
        required: [true, "Please ad the user email address"],
        unique: [true, "Email already taken"]
    },
    password: {
        type: String,
        required: [true, "Please add the password"]
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema)