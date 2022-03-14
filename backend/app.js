const express=require("express")
const mongoose=require("mongoose")
const app=express()
const cors=require("cors")
require("dotenv").config()

const newsRoute=require("./routes/newsRoute")
const userRoute=require("./routes/userRoute")

//database connection
mongoose.connect(process.env.DATABASE_URL)
const db=mongoose.connection
db.on('error',(error)=>console.error(error))
db.once('open',()=>console.log("connected to database"))


//middleware
app.use(express.json())
app.use(cors())

//routes
// app.use("/",(req,res)=>{
//     res.sendFile(__dirname + '/index.html')
// })
app.use("/news",newsRoute)
app.use("/user",userRoute)


module.exports=app