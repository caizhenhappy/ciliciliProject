const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
  username:{
    type:String,
    unique:true,
    required:true
  },
  password:{
    type:String,
    required:true
  }
})

//创建model对象
const Users = mongoose.model('users',usersSchema)

//暴露
module.exports = Users;