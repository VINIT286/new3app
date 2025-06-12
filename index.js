import express from "express"
import router from "./router/router.js"
import cors from 'cors'
import port from "./config/config.js"
import mongoose from "mongoose"
import bodyParser from "body-parser"
const app=express()

app.use(cors()) 
// app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(router)


mongoose.connect('mongodb://localhost:27017/thirddb')
.then(()=>console.log("database connected successfully"))
.catch(()=>console.log("database not connected"))
app.set("view engine","ejs")  
 
app.use(express.static("public"))
// app.get("/",(req,res)=>{
//     res.send("home")
// })
// app.get("/about",(req,res)=>{
//     res.send("about")    
// })
// app.get("/contact",(req,res)=>{
//     res.send("contact")
// })
app.listen(port,(req,res)=>{
    console.log("running on port number 3000")
})

