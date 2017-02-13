const draw2 = require("./draw2");
const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const Promise = require("bluebird"); 
const bodyparser = require("body-parser");

app.use("/public",express.static("./public"));
app.use(bodyparser.urlencoded({
    extended : true
}));
nunjucks.configure("views",{
    autoescape : true,
    express : app,
    watch :true,
    cache : true
});
app.engine("html",nunjucks.render);
app.set("view engine","html");
app.get("/",(req,res) => {
    res.render("home.html",{"m":10,"n":4});
});

app.post("/",async(req,res) => {
    let inputs = [req.body.m,req.body.n];
    try{
        [m,n] = await draw2.render(inputs[0],inputs[1]);
        res.render("home.html",{"m":m,"n":n,"result":"Render square succeed"});
    }catch(err){
        console.log(err);
        res.render("home.html",{"result": "Render square failed"});
    }
});

app.listen(5000,()=>{
    console.log("Sever listen to port 5000");
});