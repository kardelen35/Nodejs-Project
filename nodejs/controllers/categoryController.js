const { Category } = require("../models/category")


exports.listCategories = async (req,res) => {
    try {
        const listCategories = await Category.find({})

        if(!listCategories) return res.status(400).json({success:false,message:'category list not found'});
        res.status(200).send(listCategories)
    } catch (error) {
        console.log(error)
    }
}

exports.getCategoryById = async (req,res) => {
    try {
        const getCategoryById = await Category.findById(req.params.categoryId)

        if(!getCategoryById) return res.status(400).json({success:false,message:'category  not found'});
        res.status(200).send(getCategoryById)
    } catch (error) {
        console.log(error)
    }
}

exports.createCategory = async (req,res) => {
    try {
        let createCategory = new Category({
            name:req.body.name
        })
        createCategory = await createCategory.save()
        if(!createCategory) return res.status(500).json({success:false,message:'category not created'})
        res.status(201).send(createCategory)
    } catch (error) {
        console.log(error)
    }
}

exports.updateCategory = async (req,res) => {
    try {
        const updateCategory = await Category.findByIdAndUpdate(req.params.categoryId,{
            name:req.body.name
        },{new:true});

        if(!updateCategory) return res.status(500).json({success:false,message:'category not updated'});
        res.status(200).send(updateCategory)
    } catch (error) {
        console.log(error)
    }
}

exports.deleteCategory =  (req,res) => {
    try {
        Category.findByIdAndRemove(req.params.categoryId)
            .then((c)=> {
                if(c) return res.status(200).json({success:true,message:'category deleted'});
                else return res.status(400).json({message:'category not deleted'});
            }).catch((err)=> {
                return res.status(500).json({error:err.message})
            })
    } catch (error) {
        console.log(error)
    }
}