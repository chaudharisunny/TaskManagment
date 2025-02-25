const mongoose=require('mongoose')

const taskSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true 
    }, 
    complete:{
        type:Boolean,
        default:false,
      
    },
    date:{
        type:Date,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model('task',taskSchema)