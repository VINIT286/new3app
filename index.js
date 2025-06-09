import express from "express"
import router from "./router/router.js"
import port from "./config/config.js"
import mongoose from "mongoose"
import bodyParser from "body-parser"
mongoose.connect('mongodb://localhost:27017/thirddb')
.then(()=>console.log("database connected successfully"))
.catch(()=>console.log("database not connected"))
const app=express()
app.set("view engine","ejs")    
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))
// app.get("/",(req,res)=>{
//     res.send("home")
// })
// app.get("/about",(req,res)=>{
//     res.send("about")    
// })
// app.get("/contact",(req,res)=>{
//     res.send("contact")
// })
app.use(router)
app.listen(port,(req,res)=>{
    console.log("running on port number 3000")
})
.
