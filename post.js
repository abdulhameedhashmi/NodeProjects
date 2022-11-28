 const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyparser = require('body-parser')
const jsonparser = bodyparser.json()
app.use(cors())

mongoose.connect('mongodb+srv://hameed:hameed123@cluster0.5zy5dhd.mongodb.net/studetail?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(
    ()=>{console.log('Database Connected')}
)
const std = require("./models/empDetails.js")

//connecting to mongodb to get the data
app.get('/Students',(req,res)=>{
    std.find().then( (data)=> { res.json(data);})
})

app.post('/createstd',jsonparser,(req,res)=>{
    const newuser = new std({
        _id:new mongoose.Types.ObjectId(),
        stnm:req.body.stnm,
        dept:req.body.dept,
        location:req.body.location,
        email:req.body.email,
        contact:req.body.contact,
        cgpa:req.body.cgpa
    })
    newuser.save().then(
        (msg)=>{console.log(msg);res.json(msg)}
    ).catch(
        (err)=>{console.log(err)}
    )
    
})

    app.delete('/deluser/:id',(req,res)=>{
        id = req.params.id
        std.deleteOne({_id:req.params.id}).then(
            (msg)=>{res.json(msg)}

        )
    })
    app.put('/edituser/:id',jsonparser,(req,res)=>{
        id = req.params.id
        std.updateOne({_id:id},{$set:{
            stnm:req.body.stnm,
            dept:req.body.dept,
            location:req.body.location,
                email:req.body.email,
                contact:req.body.contact,
                cgpa:req.body.cgpa


            }}).then(
                (msg)=>{res.json(msg)}
            ).catch(
                (err)=>{console.log(err)}
            )
            
    })
    app.get("/searchemp/:dept",(req,res)=>{
        std.find({dept:req.params.dept}).then((data)=>{console.log(data);res.json(data)}).catch(
            (err)=>{console.log(err)}
        )
    
        })


app.listen(3110,console.log("server running on 3110"))


        
        
    
    
    



 