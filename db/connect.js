const mongoose = require("mongoose");

uri ="mongodb+srv://adityarajavi05:aditya@cluster0.iwlowfz.mongodb.net/Cluster0?retryWrites=true&w=majority";

const connectDB = () =>{
    console.log("Connecting to db");
        return mongoose.connect(uri,{
        // useNewUrlParser: true,
        // useUnifiedTopology: true
        });
    

};
module.exports = connectDB;