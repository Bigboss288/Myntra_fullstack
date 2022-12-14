const router = require("express").Router()

router.get("/test",(req,res)=>{
    res.send("test successful")
})

router.post("/post", (req,res)=>{
    const username = req.body.username
    console.log(username)
})

module.exports = router