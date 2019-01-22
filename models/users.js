const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        id:{
            type: int,
            required: false
        },
        name:{
            type: String,
            required: true
        },
        fullname:{
            type: String,
            required: true
        },
        accesslevelid:{
            type: int,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        dateadded:{
            type: Date,
            default: Date.now
        },
        datechanged:{
            type: Date,
            default: Date.now
        },
        addedby:{
            type: String,
            required: true,
            default: Date.now
        },
        changedby:{
            type: String,
            required: true,
            default: Date.now
        }
    }
);
// The following line uses the above schema and create a table in Mongo Db
module.exports = User = mongoose.model('user', UserSchema);