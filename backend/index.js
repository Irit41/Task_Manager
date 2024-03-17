const express = require('express');
const User = require('./db/models/user');
const app = express();
require('./db/mongoose')
require('./db/models/user')
require('./db/models/task')

const port = process.env.port || 4000;
app.use(express.json())

app.post('/users',(req,res)=>{
    const user = new User(req.body)
    console.log("ho noooooooo");
    user.save().then(()=>{
        res.send(user)
    }).catch((e)=>{
        res.status(400).send(e)
    })
// res.send('testing !')
})





app.listen(port,()=>{
    console.log("server is up "+port);
})