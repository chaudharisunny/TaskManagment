const Task=require('../model/task')

exports.newTask=async(req,res)=>{
    try {
       
        const {title,description,complete,date}=req.body 
        if(!title||!description||!date){
            return res.status(400).json({message:'all fields are require'})
        }
    
        const newTask=await Task.create({title,description,complete:complete||false,date}) 
        return res.status(201).json({data:newTask})     
    } catch (error) {
        console.log(error);
        
        res.status(500).json({error:error.message})
    }
   
}

exports.editTask=async(req,res)=>{
    try {
       const{id}=req.params 
       if(!id){return res.status(400).json({message:"id not found"})}
       const updateTask=await Task.findByIdAndUpdate(id,req.body,{new:true}) 
       res.status(200).json({data:updateTask})
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message})
    }
}

exports.deleteTask=async(req,res)=>{
    try {
        const{id}=req.params 
        if(!id){return res.status(400).json({message:"id not found"})}
        await Task.findByIdAndDelete(id) 
        res.status(200).json({message:'task deleted'})
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message})
    }
}