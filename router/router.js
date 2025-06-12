import express from "express"
const router=express.Router()
import{home,about,contact,adddata,subdata,registration,regdata,getregdata,deletedata, updateform, update,send_data}from "../controller/controller.js"
router.get("/",home)
router.get("/about",about)
router.get("/contact",contact)

router.get("/adddata",adddata)
router.post("/subdata",subdata)

router.post("/send_data",send_data)

router.get("/registration",registration)
router.post("/regdata",regdata)

router.get("/getregdata",getregdata)

router.post("/showreg/delete/:id",deletedata)   

router.get("/showreg/updateform/:id",updateform)
router.post("/showreg/update/:id",update)
// router.get("/",(req,res)=>{
//     res.send("these is home page")
// })
// router.get("/about",(req,res)=>{
//     res.send("these is about page")
// })
// router.get("/contact",(req,res)=>{
//     res.send("these is contact page")
// })
export default router