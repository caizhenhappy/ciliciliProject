//连接数据库
const mongooes = require('mongoose')

mongooes.connect('mongodb://localhost:27017/vue_text',{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true})

mongooes.connection.once('open',(err)=>{
  if(!err) console.log('数据库连接成功')
  else console.log(err)
})