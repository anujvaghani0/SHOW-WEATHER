const express=require("express")
const app=express();
const port=3000;
const path = require("path");
const hbs=require("hbs");

const staticPath = path.join(__dirname, "../public");

// const view = path.join(__dirname, "../templates/views");
// const particalPath = path.join(__dirname, "../templates/partials");


// app.set('view engine', 'hbs');
// app.set("views", view);
// hbs.registerPartials(particalPath);

app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.render('index')
})
app.get("/about*",(req,res)=>{
    res.send('about')
})
app.get("/weather",(req,res)=>{
    res.render('welcome to weather')
})
// app.get("*",(req,res)=>{
//     res.render("welcome to login")
// })


app.listen(port,()=>{
    console.log(`listening to the ${port}`);
})