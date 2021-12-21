const {Company} = require('../models/company');

exports.companyList = async (req,res) =>{
    try {
        const companyList = await Company.find({});
        if(!companyList) return res.status(400).json({success:false,message:"Company list not found"})
        res.status(200).send(companyList)
        
    } catch (error) {
        console.log(error)
        
    }
}
exports.companyById = async (req,res) =>{
    try {
        const companyById = await Company.findById(req.params.companyId);
        if(!companyById) return res.status(400).json({success:false,message:"Company not found"});
        res.status(200).send(companyById)
        
    } catch (error) {
        console.log(error)
    }
}

exports.createCompany = async (req,res) =>{
   try {
       
    let createCompany = await new Company({
        companyName:req.body.companyName,
        companyLegalNumber:req.body.companyLegalNumber,
        incorporationCountry:req.body.incorporationCountry,
        webSite:req.body.webSite
    }).save()

    if(!createCompany) return res.status(400).json({success:false , message:"Create company has not been created"})
    res.status(201).send(createCompany);
       
   } catch (error) {
       console.log(error)
       
   }
} 

exports.companyUpdate = async (req,res) =>{
    try {
        const companyUpdate = await Company.findByIdAndUpdate(req.params.companyById,{
            companyName:req.body.companyName,
            companyLegalNumber:req.body.companyLegalNumber,
            incorporationCountry:req.body.incorporationCountry,
            webSite:req.body.webSite
        },{new:true})
        if(!companyUpdate) return res.status(400).json({message:"Company not deleted"});
        res.status(200).send(companyUpdate);
    } catch (error) {
        console.log(error)
    }
}

exports.companyDelete = (req,res) =>{
    try {
        Company.findByIdAndRemove(req.params.companyId)
        .then((e)=>{
           
            if(e) return res.status(200).json({message:"Company has been deleted"});
            else return res.status(400).json({message:"Company not deleted"});
        }) .catch((error)=>{
          return  res.status(500).json({error:error.message})
        })
    } catch (error) {
        console.log(error)
    }
}
