const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
    },
    email: {type: String, required: true, unique: true, trim: true},
    password: {type: String, required: true, trim: true, minlength: 3},
    leaves: {type: Number, required: true, default: 0},
});

userSchema.plugin(uniqueValidator);

const user = mongoose.model("user", userSchema);

module.exports = user;
