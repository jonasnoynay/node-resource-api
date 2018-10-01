const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {type: String, require: true },
    email: {type: String, require: true, unique: true },
    password: {type:String, required: true },
    updated_at: Date,
    created_at: Date
});

UserSchema.pre('save', function() {

    this.updated_at = Date.now();
    if(!this.created_at) {
        this.created_at = Date.now();
    }
    next();
});

const User = mongoose.model('User', UserSchema);
module.exports = User;