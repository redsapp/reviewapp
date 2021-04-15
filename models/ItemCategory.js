const mongoose = require('mongoose')
const schema = mongoose.Schema;
const { timeStamp } = require('console');


const CategorySchema = new schema({
    title:{
        type:String,
        required:true

    },
    description:{
        type:String,
        required:false
    },
    image:{
        type:String,
        required:false
    }
}, {timestamps:true});

const ItemCategory = mongoose.model('ItemCategory', CategorySchema);
module.exports = ItemCategory;
