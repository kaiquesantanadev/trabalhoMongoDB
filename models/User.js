const mongoose = require('mongoose')

const UserModel = mongoose.model('User', {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: mongoose.Schema.Types.Mixed, required: true },
});

module.exports = UserModel