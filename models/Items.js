const mongoose = require('mongoose')
const schema = mongoose.Schema;
const { timeStamp } = require('console');


const ItemSchema = new schema({
    title:{
        type:String,
        required:true

    },
    intro:{
        type:String,
        required:false
    },
    description:{
        type:String,
        required:false
    },
    images:{
        type:Array,
        required:false
    },
    category:[
      {type: schema.Types.ObjectId, ref: 'ItemCategory'}
    ]
}, {timestamps:true});

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;
