const express = require('express')
const path = require('path')
const data = require('./data.json')
const fs = require('fs')
require('dotenv').config()

const app = express();
const port = process.env.PORT

app.use(express.static(path.join(__dirname,'project_1')))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// app.use(auth)

function check(req,res,next){
    let text = ''
    data.forEach(element=>{
        console.log(element)
        if(element.username==req.body.username){
            text += 'username '
        }
        if(element.email==req.body.email){
            text += 'email'
        }
    })
    if(text.length){
        res.status(400).json({success: false, data: `Please try again ${text} is already taken`})
        return;
    }
    next()
}
function auth(req,res,next){
    let text = ''
    if(req.body.username===''){
        text+='username '
    }
    if(req.body.email===''){
        text+= 'email '
    }
    if(req.body.password===''){
        text += 'password'
    }
    if(text.length){
        res.status(400).json({success: false, data: `Please provide ${text} value`})
        return ;
    }
    next();
}
app.get('/login',(req,res)=>{
    res.status(200).json({success: true})
})

app.post('/login',auth, check, (req,res)=>{
    // console.log(req.body);
    fs.readFile(path.join(__dirname,'data.json'),'utf-8',(err,val)=>{
        if(err){
            console.log(err);
            return ;
        }
        let newData = JSON.parse(val)
       
        newData.push(req.body)

        fs.writeFile('./data.json',JSON.stringify(newData),err=>{
            if(err){
                console.log(err);
                return ;
            }
    
            res.status(200).json({success: true, data: 'New User added'});
        })
    })
   
    // res.status(200).json({success:true, data : "User Addedd Successfully"})
})


app.listen(port,()=>{
    console.log(`server is listening at ${port}`);
})
