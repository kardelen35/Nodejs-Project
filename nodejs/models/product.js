const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category'
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'company'
    },
    amount:{
        type:Number,
        default:1,
    },
    amountUnit:{
        type:Number,
        default:0
    },
    image:{
        type:String,
        default:''
    }
},{timestamps:true});

exports.Product = mongoose.model('product',productSchema);