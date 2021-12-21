const { Category } = require("../models/category");
const { Company } = require("../models/company");
const { Product } = require("../models/product")


exports.listProducts = async (req,res) => {
    try {
        const listProducts = await Product.find().populate('category').populate('company');

        if(!listProducts) return res.status(400).send('product list not found')
        res.status(200).send(listProducts)
    } catch (error) {
        console.log(error)
    }
}

exports.getProductById = async (req,res) => {
    try {
        const getProductById = await Product.findById(req.params.id).populate('category').populate('company');
        if(!getProductById) return res.status(400).send('product  not found')
        res.status(200).send(getProductById)
    } catch (error) {
        console.log(error)
    }
}
exports.createProduct = async (req,res) => {
    try {
        const category = await Category.findById(req.body.category);
        if(!category) return res.status(404).send('Invalid category Id')
        const company = await Company.findById(req.body.company);
        if(!company) return res.status(404).send('Invalid company Id')

        let createProduct =await  new Product({
            name:req.body.name,
            category:req.body.category,
            company:req.body.company,
            amount:req.body.amount,
            amountUnit:req.body.amountUnit,
            image:req.body.image
        }).save()

        if(!createProduct) return res.status(400).send('product  not created')
        res.status(200).send(createProduct)
    } catch (error) {
        console.log(error)
    }
}

exports.updateProduct = async (req,res) => {
    try {
        const category = await Category.findById(req.body.category);
        if(!category) return res.status(404).send('Invalid category Id')
        const company = await Company.findById(req.body.company);
        if(!company) return res.status(404).send('Invalid company Id')

        const updateProduct = await Product.findByIdAndUpdate(req.params.id,{
            name:req.body.name,
            category:req.body.category,
            company:req.body.company,
            amount:req.body.amount,
            amountUnit:req.body.amountUnit,
            image:req.body.image
        },{new:true})

        
        if(!updateProduct) return res.status(400).send('product  not updated')
        res.status(200).send(updateProduct)
    } catch (error) {
        console.log(error)
    }
}

exports.deleteProduct = (req,res) => {
    try {
        Product.findByIdAndRemove(req.params.id)
            .then((p)=> {
                if(p) return res.status(200).json({message:'Product deleted'})
                else return res.status(400).json({message:'product not deleted'})
            }).catch((err)=> {
                return res.status(500).json({error:error})
            })
    } catch (error) {
        console.log(error)
    }
}

