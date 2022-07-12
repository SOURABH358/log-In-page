// const express = require('express')
// const fs = require('fs')
// const path = require('path')
// const data = require('./data.json')
// const app = express()
// require('dotenv').config()

// const port = process.env.PORT
// console.log(data);
// app.use(express.static(path.join(__dirname,'project_1')))
// app.use(express.json())

// app.get('/',(req,res)=>{
//     res.send('Hello')
// })

// app.post('/login', (req,res)=>{
//     let text = ''
//     data.forEach(element=>{
//         console.log(element)
//         if(element.username==req.body.username){
//             text += 'username '
//         }
//         if(element.email==req.body.email){
//             text += 'email'
//         }
//     })
//     if(text.length()){
//         res.status(400).send({success: false, data: `Please try again ${text} is already taken`})
//     }
//     const newData = data;

//     newData.push(req.body)
//     fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(data),err=>{
//         if(err){
//             console.log(err);
//             return ;
//         }
//         console.log('data added');
//         res.json({success: true});
//     })
// })
// app.listen(port,()=>{
//     console.log(`server is listening at ${port}`);
// })

