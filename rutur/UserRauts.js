const express = require("express");
const { creatNewStudent, getAllUsers, getUserByName } = require("../controllers/UserStusend");
const UserRouter=express.Router();

UserRouter.post("/creatNewStudent",creatNewStudent)
UserRouter.get("/getAllUsers",getAllUsers)
UserRouter.post("/getUserByName",getUserByName)



module.exports = UserRouter;