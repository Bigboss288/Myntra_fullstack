const mongoose = require("mongoose")
const productSchema = new mongoose.Schema(
    {
        img : {type: String,required:true},
        category : {type: String,required:true},
        brand : {type: String,required:true},
        title : {type: String,required:true,unique:false},
        color : {type: Array},
        price : {type: Number,required:true},
    },
    {timestamps:true}
);

module.exports = mongoose.model("Product",productSchema)   //mongoose.model("name of the model ie "product" ",model)