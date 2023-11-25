const mongoose=require("mongoose");
const userModule = require("../modules/food.module");
const User=userModule;



const getAllUsersID =async()=>{
    const usersID=User.find({})
    .then((users) => {
      // console.log('All users:', users);
      let usersID=[]
      users.every((user)=>usersID.push(user.ID))
      // console.log(usersID);
      return usersID
    })
    .catch((e) => {
      console.error('Error retrieving users:', e.message);
    });
    return usersID
}

const IsUserExist=async(userID)=>await getAllUsersID()
.then((value) =>{
console.log(value);
return value.includes(userID)
})

const isUserExist=async(req, res)=>{
    await getAllUsersID()
    .then((value) =>{
      res.status(200).json({ message: value.includes(req.body.ID) });
    })
  }

const creatNewUser = async (req, res) => {
  console.log("body -> ",req.body);
    const canCreat= await IsUserExist(req.body.ID,).then((v)=>!v)
    if (canCreat) {
      userModule.create({
        ID: req.body.ID,
        mail: req.body.mail,
        password: req.body.password,
        // name: req.body.name,
      }).then((response) => {
        res.status(200).json({
          message: "done",
          ...req.body
        });
      }).catch(e=>{
        res.status(500).json({message:e.message})
        console.log(e.message);
      });
    }else{
      res.status(500).json({message:"User Exist"})
    }

}

const getUserByID = async (req, res) => {
  const ID = req.body.ID;
  console.log(req.body.ID);

  try {
    const user = await User.findOne({ ID });
    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User found:", user);
    res.status(200).json({ message: user });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: error });
  }
};

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

// const getUserByName = async (req , res)=>{
//   StudentModule.find({name:req.body.name})
//     .then(students => {
//     res.status(200).json(students)
//   })
// }

module.exports={
    creatNewUser,
    isUserExist,
    getUserByID,
    getAllUsers
}