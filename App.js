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
mongoose.connect(monooseLink);

mongoose.connection.on("connected",()=>{
    console.log("mongo connected");
})

// app.use(morgan("dev"));
app.use("/",Ruter)


// app.get("/app" ,(req,res)=>{
//     res.status(200).json({
//         massage:"yas",
//         batat:"5kg"
//     })
// })

// app.post("/creatNewStudent", (req, res) => {
//     StudentModule.create({
//       name: req.body.name,
//       password: req.body.password,
//     }).then((response) => {
//       res.status(200).json({
//         message: "done",
        
//       });
//     }).catch(e=>{
//       res.status(500).json({message:'error'})
//     });
//   });

//   app.get("/getAllUsers",  (req, res) => {
  
    // try {
    //   const allUsers = await StudentModule.find();
    // } catch (error) {
    //   console.log("get all students error: ", e);
    // }
  
//     StudentModule.find()
//       .then((stRes) => {
//         console.log("");
//         res.status(200).json({
//           message: "done",
//           users: stRes,
//         });
//       })
//       .catch((e) => {
//         console.log("get all students error: ", e);
//       });
//   });

//   app.post('/getUserByName' , (req , res) => {
//     StudentModule.find({name:req.body.name})
//     .then(students => {
//       res.status(200).json(students)
//     })
//   })

  
  module.exports = app;