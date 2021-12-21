const { User } = require("../models/user")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
exports.registerUser = async (req,res) => {
    try {
        let user =await new User({
            username:req.body.username,
            email:req.body.email,
            password:bcrypt.hashSync(req.body.password,10)
        }).save()

        if(!user) return res.status(500).json({message:'user not has been created'})
        res.status(201).send(user);
    } catch (error) {
        console.log(error)
    }
}
exports.loginUser = async (req,res) => {
    try {
        const user = await User.findOne({email:req.body.email});

        if(!user) return res.status(404).json({message:'user not found '})

        if(user && bcrypt.compareSync(req.body.password,user.password)) {
            const token = jwt.sign({
                email:user.email,
                username:user.username
            },process.env.SECRET,{
                expiresIn:'1d'
            })

            res.status(200).json({user,token})
        }
        res.status(500).json({message:'Passwords  disparity'})
    } catch (error) {
        console.log(error)
    }
}