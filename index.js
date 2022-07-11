const express = require('express')
const fs = require('fs')
const path = require('path')
const data = require('./data.json')
const app = express()

app.use(express.static(path.join(__dirname,'project_1')))
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.post('/login',(req,res)=>{
    data.forEach(element=>{
        if(element.username===req.body.username){
            if(element.email===req.body.email){
                res.send({success:false,msg:'username and email already exist'})
            }
            // res.send({success:false,msg:'username already exist'})
        }
        // else if(element.email===req.body.email){
        //     res.send({success:false,msg:'email already exist'})
        // }
    })
    const newData = data;

    newData.push(req.body)
    fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(data),err=>{
        if(err){
            console.log(err);
            return ;
        }
        res.json({success: true});
    })
})
app.listen(5000)