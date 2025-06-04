// const arr=[]
// let id=1
import User from "../models/user.js"
import Reg from "../models/reg.js"
function home(req,res){
    const a=18
    res.render("home",{a})
}
function about(req,res){
    const b=[33,44,55]
    res.render("about",{b})
}
function contact(req,res){
    const c={
        "name":"vinit",
        "email":"vinitgandhe10301@gmail.com"
    }
    res.render("contact",{c})
}
function adddata(req,res){
    res.render("adddata")
}
// function subdata(req,res){
//     let name=req.body.name
//     let email=req.body.email
//     let obj={
//         id:id++,
//         name,
//         email
//     }
//     arr.push(obj)
//     console.log(arr)
//     res.redirect("/")
// }
const subdata = async (req,res)=>{
    let name=req.body.name
    let email=req.body.email
    await User.create({name,email})
    res.redirect("/")
}
function registration(req,res){
    res.render("registration")
}
const regdata = async (req,res) =>{ 
    let name=req.body.name
    let email=req.body.email
    let mobile=req.body.mobile
    let password=req.body.password
    let cpass=req.body.cpass
    await Reg.create({name,email,mobile,password,cpass})
    res.redirect("/")
}
const getregdata = async (req,res)=>{
    const show = await Reg.find()
    // res.json(show)
    res.render("showreg",{show})
}
export{home,about,contact,adddata,subdata,registration,regdata,getregdata}