const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());



var mongodb = 'mongodb+srv://Info6150Final:info6150final@cluster0.vwjsj.mongodb.net/User?retryWrites=true&w=majority';
mongoose.connect(mongodb);

app.use("/users/", require("./routes/userRoute.js"));


app.listen(3001, function(){
    console.log(">>> express is running");
});



