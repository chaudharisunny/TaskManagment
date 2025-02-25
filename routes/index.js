const express=require('express')
const router=express.Router()
const userController=require('../controller/user')
const { newTask, editTask, deleteTask } = require('../controller/task')


router.get('/alluser',userController.allUser)
router.post('/signup',userController.postUser)
router.post('/login',userController.loginUser)

router.post('/newtask',newTask)
router.put('/updatetask/:id',editTask)
router.delete('/deletetask/:id',deleteTask)

module.exports=router 