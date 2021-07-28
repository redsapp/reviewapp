const mongoose = require('mongoose')
const schema = mongoose.Schema;
const { timeStamp } = require('console');


const UserSchema = new schema({
    username:{
        type:String,
        required:true,
        unique: true,

    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true   
    },
    password:{
        type:String,
        required:true
    },
}, {timestamps:true});

const User = mongoose.model('User', UserSchema);
module.exports = User;