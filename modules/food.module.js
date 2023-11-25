const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  ID:{
    type:String,
    required:true,
    minLength:4,
    maxLength:20,
  },
  mail:{
    type:String,
    required:true,
    lowercase:true,
  },
  password:{
    type:String,
    required:true,
    minLength:8,
    maxLength:20,
  },
  // name:{
  //   type:String,
  //   required:true,
  //   minLength:1,
  //   maxLength:20,
  // },
  createdAt:{
    type:Date,
    immutable:true,
    default:()=> Date.now()
  },
});

const userModule = mongoose.model('Users', userSchema);
// key / refrens / to data bace

module.exports = userModule