//引入express
const express = require ('express')
//创建app应用对象
const app = express();
//链接数据库
require('./db/user.js')
//引入model
const Users = require('./models/user.js')
//引入token生成
const createToken = require('./token/createToken.js')
const checkToken = require('./token/checkToken.js')
//引入token解析
var jwt = require('jsonwebtoken');
// //设置路由
//登录
app.get('/login',async (req,res)=>{
  const {username,password} = req.query
  const result = await Users.findOne({username,password})
  if(result){
    const data = { code: 0, data:{username,password},token:createToken(result._id),}
    //res.setHeader.authorization = result.data.token
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



// 根据请求携带的token查询对应的user
  app.get('/auto_login',async function (req, res) {
    const {token} = req.query
  // 获取请求头中的token
  //const token=req.headers['authorization']
  // 如果请求头中没有token,直接返回token
  // if(!token){
  //   return res.send({code:1,msg:'请先登录'})
  // }
  // 解码token,如果失败或者过了有效期返回401
  const decoded=jwt.decode(token,'secret')
  if(!decoded||decoded.exp<Date.now()/1000){
    res.status(401)
    return res.json({message:'token过期,请重新登录'})
  }
   // 根据解码出的用户id,查询得到对应的user,返回给客户端
   const userId=decoded.id
   await Users.findOne({_id:userId})
   .then(user=>{
     
     res.send({code:0,data:user,token:token})
   })
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

