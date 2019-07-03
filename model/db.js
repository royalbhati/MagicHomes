const mongoose = require('mongoose')
const url ="mongodb+srv://royal:royal123@cluster0-uo6jd.mongodb.net/syncnote?retryWrites=true"
// const url ="mongodb://127.0.0.1:27017/test"
mongoose.connect(url,{useNewUrlParser: true})
.then(()=>{
  console.log("Database connected")
})