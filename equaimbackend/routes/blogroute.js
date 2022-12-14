const express = require("express")
const blogmodel = require("../models/blog.model")



const blogrouter = express.Router()

blogrouter.get("/",async(req,res)=>{
    
    try {
        let blogdata = await blogmodel.find();
        res.send(blogdata);
      } catch (e) {
        res.send(e.message);
      }
})
blogrouter.post("/",async(req,res)=>{
    try {
        let updateblogdata = await blogmodel.create(req.body);
        res.send(updateblogdata);
      } catch (e) {
        res.send(e.message);
      }
})
blogrouter.get("/:id",async(req,res)=>{
    try {
        let blogdata= await blogmodel.find({_id:req.params.id});
        res.send(blogdata);
      } catch (e) {
        res.send(e.message);
      }
})


module.exports =  blogrouter
