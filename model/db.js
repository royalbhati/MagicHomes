const mongoose = require('mongoose')
const url =process.env.MONGO_URL
// const url ="mongodb://127.0.0.1:27017/test"
mongoose.connect(url,{useNewUrlParser: true})
.then(()=>{
  console.log("Database connected")
})