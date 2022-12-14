const { default: mongoose } = require("mongoose");

const blogschema = new mongoose.Schema({
    title:String,
    desc: String,
    value:String,
})


const blogmodel = mongoose.model("blogs", blogschema);
module.exports =  blogmodel