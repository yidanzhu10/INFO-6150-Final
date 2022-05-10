// import mongoose, { Schema } from "mongoose";
const mongoose = require("mongoose");

const userSchema = {
    firstname : String,
    lastname : String,
    email : String,
    password : String,
    notelist : Array
 }

 const user = mongoose.model("information", userSchema);

 module.exports = user;