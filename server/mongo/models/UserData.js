const { Schema, model } = require('mongoose')

const UserData = new Schema({
    username: { type: String, unique: true, required: true },
    name: { type: String },
    userId: {type: String}
})

module.exports = model('data_users', UserData)