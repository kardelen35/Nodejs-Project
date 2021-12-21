const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:32
    }
},{timestamps:true});

exports.Category = mongoose.model('category',categorySchema)