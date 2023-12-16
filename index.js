require('dotenv').config()

const express = require('express')
const app = express()
const Port = 4000 //using dotenv maintain privacy of port which we are using to communicate

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/login",(req,res)=>{
    res.send("This is Valid login")
})

app.get("/return",(req,res)=>{
    res.json({
        "Name" : "MMR",
        "Age" : 21
    })
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})