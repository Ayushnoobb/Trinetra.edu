const express = require("express");
const app = express();
app.use(express.urlencoded({extended:false}));
require("dotenv").config();

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service:"gmail",
  auth:{
    user: process.env.USER_EMAIL,
    pass : process.env.USER_PASS
  }
})

let mailMessage , oTp;

app.post("/message" , (req, res) =>{
  mailMessage = req.body;
  sendOTP(mailMessage);
  res.redirect("/message/verify");
})

app.post("/message-verify" , (req , res) =>{
   let respondedOtp = req.body.verify1 + req.body.verify2 + req.body.verify3 +req.body.verify4 ;
   respondedOtp = parseInt(respondedOtp);
   if (respondedOtp === oTp){
    sendMail(mailMessage);
    res.redirect("/message/sucess")
   }
   else{
    res.redirect("/message/error")
   } 
})

function sendMail(mailMessage){
  const mailOptions = {
    from : process.env.USER_EMAIL,
    to : `${mailMessage.email}` ,
    subject : "Thank you for messaging , " + `${mailMessage.name}  ${mailMessage.surname}`,
    text : `Your text is ${mailMessage.message} \n Your Contact number is ${mailMessage.number}`
  }
  transporter.sendMail(mailOptions , (err , info) =>{
    if (err){
      console.log(err)
    }else{
      console.log(info);
    }
  })
}

function sendOTP(mailMessage){
  var val = Math.floor(1000 + Math.random() * 9000);
  oTp = val ; 
  const mailOptions = {
    from : process.env.USER_EMAIL,
    to : `${mailMessage.email}` ,
    subject : `Email  verification code`,
    text : `Your verification code is ${val} \n Please enter it before 2 hours`
  }
  transporter.sendMail(mailOptions , (err , info) =>{
    if (err){
      console.log(err)
    }else{
      console.log(info);
    }
  })
}

app.listen(3001)