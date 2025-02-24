const { createToken } = require('../middleware/auth')
const User=require('../model/user')
const bcrypt=require('bcrypt')

exports.allUser=async(req,res)=>{
    try {
        const alluser=await User.find()
        return res.status(200).json({data:alluser})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
exports.postUser=async(req,res)=>{
    try {
        const{name,email,password}=req.body
        if(!name||!email||!password)
        {return res.status(400).json({message:'data is required'})}
        const existingUser=await User.findOne({email})
        if(existingUser){
            return res.status(400).json({message:'this email already exist'})
        }
    const userData=await User.create({name,email,password})
    res.status(201).json({data:userData})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

exports.loginUser=async(req,res)=>{
    try {
        const{email,password}=req.body 
        const user=await User.findOne({email:email})
        if(!user){
            return res.status(400).json({message:"invalid credentials"})
        }
        const isPassword=await user.comparePassword(password)
        if(!isPassword){
            return res.status(400).json({message:"invalid credentials"})
        }
        const token=createToken(user)
        return res.status(200).json({message:'success login',token})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
