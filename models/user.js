const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');
const now = moment().format();

const userSchema = new Schema({
    name:{ type: String, required: true, trim: true },
    phoneNumber: { type: String, trim: true },
    email: {type: String, required: true, trim: true },
    message: {type: String},
    date: {type: Date, default: now}
});

const User = mongoose.model("User", userSchema);

module.exports = User;