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
    res.render("home2.html",{"m":10,"n":4});
});

app.post("/",async(req,res) => {
    [m,n] = [req.body.m,req.body.n];
    try{
        await draw2.render(m,n);
        res.json({"result" : "Render square succeed" });
    }catch(err){
        res.json({"result" : "Render square failed" });
    }
});

app.listen(4000,()=>{
    console.log("Sever listen to port 4000");
});