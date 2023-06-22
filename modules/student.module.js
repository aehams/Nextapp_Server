const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: String,
  password: String,
});

const StudentModule = 
  mongoose.model("Student", StudentSchema);

module.exports = StudentModule;