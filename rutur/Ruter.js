const { models } = require("mongoose");
const { getAllUsers } = require("../controllers/UserStusend");
const UserRouter = require("./UserRouter");

const Ruter=[
    UserRouter
]
 module.exports = Ruter;