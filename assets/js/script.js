const port = process.env.PORT || 8080;
const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");

const staticPath = path.join(__dirname, "../../");
const templateName = path.join(__dirname, "../../templates/views");
const partialName = path.join(__dirname, "../../templates/partials");
// console.log(templateName);                


// ----------------- Menu ---------------------
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "20px";
    document.getElementById("main").style.marginLeft = "20px";
    document.getElementById("overlay").style.width = "100%";
    document.getElementById("overlay").style.height = "100%";
    document.getElementById("overlay").style.backgroundColor = "rgba(0,0,0,0.4)";            
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("overlay").style.width = "0%";
    document.getElementById("overlay").style.height = "0%";
}




app.set("view engine","hbs");
app.set("views",templateName);
hbs.registerPartials(partialName);

app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.render("index");
    // console.log("express");
});
app.get("/element",(req,res)=>{


})

app.get("/",(req,res)=>{
    res.send("Something : Error");
});

app.get("*",(req,res)=>{
    res.render("404error");

});

app.listen(port,()=>{
    console.log("Server active: localhost:8080");
});