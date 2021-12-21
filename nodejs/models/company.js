const moongose = require('mongoose');

const companySchema = moongose.Schema({
    companyName:{
        type:String,
        trim:true,
        required:true
    },
    companyLegalNumber:{
        type:Number,
        trim:true,
    },
    incorporationCountry:{
        type:String,
        trim:true
    },
    webSite:{
        type:String,
        trim:true
    }
},{timestamps:true})
exports.Company = moongose.model('company',companySchema)