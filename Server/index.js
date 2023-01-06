const express = require('express')
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require('dotenv')
const productRouter = require('./Routes/Product')

dotenv.config();

mongoose.connect(process.env.mongo_URL
).then(()=>{
    console.log("db connection successful")
}).catch((err)=>{
    console.log(err)
})

app.use(cors())
app.use(express.json());
app.use('/api/product', productRouter)

// app.use(express.static(path.join(__dirname, "/client")));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
// });


app.listen(process.env.PORT || 5000, ()=>{
    console.log("server running")
})