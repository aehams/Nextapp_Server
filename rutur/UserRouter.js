const express = require("express");
// const UserController = require("../controller/UserController");
const { creatNewUser, getUserByID, isUserExist } = require("../controllers/Userfood");
const UserRouter = express.Router();


UserRouter.post("/creatNewUser",creatNewUser)
UserRouter.post("/getUserByID",getUserByID)
UserRouter.post("/isUserExist",isUserExist)



module.exports = UserRouter;