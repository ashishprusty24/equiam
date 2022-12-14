const express = require("express")
const { default: mongoose } = require("mongoose")
const blogmodel = require("./models/blog.model")
const blogrouter = require("./routes/blogroute")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hlw ashish")
})

app.use("/blog",blogrouter)



app.listen(8080,()=>{
    mongoose.set("strictQuery", false);
    mongoose.connect("mongodb://localhost:27017/sample")
  console.log("server run on port https://localhost:8080");
})