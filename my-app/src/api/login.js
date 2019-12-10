//引入express
const express = require ('express')
//创建app应用对象
const app = express();
//链接数据库
require('./db/user.js')
//引入model
const Users = require('./models/user.js')
//设置路由
//登录
app.get('/login',async (req,res)=>{
  const {username,password} = req.query
  const result = await Users.findOne({username,password})
  if(result){
    res.send('登录成功')
    return 0
  }
  return 1
})
//注册
 app.get('/registered',async (req,res)=>{
  //获取用户提交的数据
  const {username,password,rePassword} = req.query
  console.log(username)
   console.log('哈哈222')
  //校验数据是否存在
  const result = await Users.findOne({username})
  console.log(result)
   console.log('哈哈111')
  if(result){
    res.send('用户名已存在')
    console.log('哈哈')
    return 1
  }
  //将用户数据存入数据库中
  Users.create({
    username,
    password
  })
  //返回注册成功
  res.send('注册成功')
  return 0
})
// require('./db')
//监听端口号
app.listen(5000,(err)=>{
  if(!err){
    console.log('服务器启动成功,http://localhost:5000')
  }else{
    console.log(err)
  }

})

