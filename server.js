const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//Middlewares

app.use(express.json());

app.use(cors());

const User = require("./models/User.model.js");



let PORT = process.env.PORT;
let MongoDB_URI = process.env.MongoDB_URI;

app.get("/",(req,res) => {
    
    res.send(`Hello from backend`);
})

app.post("/", async(req,res) => {
    let data = req.body;
    let dataObj = {
        name: data.name,
        age: data.age
    }
    console.log("Data : ",data);
    
    if(data){
        let response = await User.insertMany(dataObj);
        console.log("Data Added with reponse ",response);
        
        res.send(response);
    }

})

app.listen(PORT, ()=> {

    try {
        mongoose.connect(MongoDB_URI);

        console.log(`DB Connected and Server running on PORT ${PORT}`);
        
    } catch (error) {
        console.log(error);
        
    }
})