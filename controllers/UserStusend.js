const mongoose=require("mongoose");
const StudentModule = require("../modules/student.module");



const creatNewStudent = async (req , res)=>{
  StudentModule.create({
    name: req.body.name,
    password: req.body.password,
    }).then((response) => {
      res.status(200).json({
      message: "done",        
      });
    }).catch(e=>{
      res.status(500).json({message:'error'})
  });   
}

const getAllUsers = async (req , res)=>{
  try {
    const allUsers = await StudentModule.find();
  } catch (error) {
    console.log("get all students error: ", e);
  }

  StudentModule.find()
    .then((stRes) => {
      console.log("");
      res.status(200).json({
        message: "done",
        users: stRes,
      });
    })
    .catch((e) => {
      console.log("get all students error: ", e);
  });
}

const getUserByName = async (req , res)=>{
  StudentModule.find({name:req.body.name})
    .then(students => {
    res.status(200).json(students)
  })
}

module.exports={creatNewStudent,getAllUsers,getUserByName};

