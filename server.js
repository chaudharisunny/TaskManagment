const express=require('express');
const connectDB = require('./config/db');
const app=express()
const indexRoutes=require('./routes/index')
const port=3000;

connectDB()

app.use(express.json())
app.use('/',indexRoutes)
app.listen(port,()=>{
    console.log(`server connected to ${port}`)
})