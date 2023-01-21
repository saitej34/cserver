const express = require('express')
const app = express();
const port = 9000

app.use('/',(req,res)=>{
    res.json({"message":"Hello"})
})
app.listen(9000,()=>{
    console.log('listening on port')
})