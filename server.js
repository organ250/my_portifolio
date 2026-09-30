const express=require("express"); const path=require("path");
const app=express(); const dist=path.join(__dirname,"dist"); app.use(express.static(dist));
app.get("*",(req,res)=>res.sendFile(path.join(dist,"index.html")));
app.listen(3000,()=>console.log("Ujeneza Organ portfolio running on http://localhost:3000"));