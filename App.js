const express=require("express")
const mongoose=require("mongoose");
// const morgan = require("morgan")
const StudentModule = require("./modules/student.module");
// const Routs=require('./rutur/Ruter');
const Ruter = require("./rutur/Ruter");



const app =express();
app.use(express.json());

const monooseLink=
    "mongodb+srv://aehamshaq:aeham12shaq@cluster0.dagjrsp.mongodb.net/"
    // "mongodb+srv://aehamshaq:aeham12shaq@cluster0.dagjrsp.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(monooseLink);

mongoose.connection.on("connected",()=>{
    console.log("mongo connected");
})

// app.use(morgan("dev"));
app.use("/",Ruter)
  
  module.exports = app;