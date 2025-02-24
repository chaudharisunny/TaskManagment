const express=require('express')
const router=express.Router()
const userController=require('../controller/user')

router.get('/alluser',userController.allUser)
router.post('/signup',userController.postUser)
router.post('/login',userController.loginUser)

module.exports=router 