const express =require('express');
const path=require('path');
const hbs=require('hbs');

const app =express();


//setting hbs
const templates_path=path.join(__dirname,'./templates/views');
const partials_path=path.join(__dirname,'./templates/partials');
app.set("view engine","hbs");
app.set("views",templates_path)
hbs.registerPartials(partials_path);

//static public directory path
const publicPath = path.join(__dirname,'./public');
app.use(express.static(publicPath));

app.get("/",(req,res)=>{
    res.render('index');
})

app.get("/about",(req,res)=>{
    res.render('about');
})

app.get("/weather",(req,res)=>{
    res.render('weather');
})

app.get("*",(req,res)=>{
    res.render('error',{
        errormsg:"Oops! Page Not Found"
    });
})

app.listen(8000,()=>{
    console.log('8000 port is listening');
})