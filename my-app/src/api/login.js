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
  console.log(result)
  if(result){
    const data = { code: 0, data:'登录成功'}
    res.send({code: 0, data})
  }else{
    const data = {code: 1, data:'帐号或密码错误,请重新输入'}
    res.send(data)
  }
  
})
//注册
 app.get('/registered',async (req,res)=>{
  //获取用户提交的数据
  const {username,password} = req.query
  
  //校验数据是否存在
  const result = await Users.findOne({username})
  console.log(result)
  if(result){
    console.log('注册没成功')
    const data = { code : 1,data:'用户名已存在'}
    res.send(data)
  }else{
    //将用户数据存入数据库中
    Users.create({
      username,
      password
    })
    console.log('成功')
    const data = { code : 0,data:'注册成功'}
    //返回注册成功
    res.send(data)
  }
  
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

