const express=require('express')
const cors =require('cors')
const app=express()
app.use(cors());
app.listen(3000,()=>{
    console.log("App is Running On Port No 3000")
})
app.get('/',(req,res)=>{
    res.send("Hello Word!!")
})
app.get('/demo',(req,res)=>{
    res.json(("json"));
})