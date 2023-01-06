const router = require("express").Router()
const product = require("../Models/Product")

//Insert new Product
router.post("/", async (req,res)=>{
    const newProduct = new product(req.body)

        try{
            const savedProduct = await newProduct.save()
            res.status(200).json(savedProduct)
        }
        catch(err){
            res.status(500).json(err)
        }

    
})

//update existing product
router.put("/:id", async (req,res) => {
    try{
        const updateProduct = await product.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body,
            },
            { new:true}
        )

        res.status(200).json(updateProduct)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//delete product
router.delete("/:id", async (req,res) => {
    try{
        await product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product deleted")
    }
    catch(err){
        res.status(500).json(err)
    }
})

//get product
router.get("/find/:id", async (req,res) => {
    try{
        const findproduct = await product.findById(req.params.id)
        res.status(200).json(findproduct)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//get all product
router.get("/findall", async (req,res) => {
    try{
        const findproduct = await product.find()
        res.status(200).json(findproduct)
    }
    catch(err){
        res.status(500).json(err)
    }
})


module.exports = router
