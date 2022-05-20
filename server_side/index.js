const express= require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const path = require("path")
const user2=require("./models/user")
const user1=require("./router/users")

app.use(express.json());
app.use("/",user1)

dotenv.config({path:path.join(__dirname,"./env")})
const port=process.env.PORT || 8005;
const DB="mongodb://localhost:27017/gbdata_base" || process.env.DATABASE;

mongoose.connect(DB).then(()=>{console.log("connect to database")}).catch((err)=>{console.log(err)});

app.listen(port,()=>{console.log(`run on port number ${port}`)})