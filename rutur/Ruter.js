const { models } = require("mongoose");
const UserRouter = require("./UserRauts");
const { getAllUsers } = require("../controllers/UserStusend");

const Ruter=[
    UserRouter
]
 module.exports = Ruter;