const express = require('express');
const User = require('./db/models/user');
const app = express();
require('./db/mongoose')
const Task = require('./db/models/task')
const routerUser = require('./db/routers/routerUser')
const routerTask = require('./db/routers/routerTask')
const port = process.env.port || 4000;
app.use(express.json())

// const router = new express.Router()
// router.get('/test',(req,res)=>{
//   res.send("this is from m router")

// })

app.use(routerTask)




app.listen(port, () => {
  console.log("server is up " + port);
})