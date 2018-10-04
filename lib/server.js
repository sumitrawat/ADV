const express=require('express');
const config=require('./config');
const app=express();
app.use(express.static('public'));
app.set('view engine','ejs');
app.get('/',(req,res)=>{
  res.render('index',{port:config.port});
});
app.listen(config.port,()=>{
  console.log(`Serving on port: ${config.port}`);
});