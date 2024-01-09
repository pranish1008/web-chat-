const express = require("express");
const dotenv = require("dotenv");
const req = require("express/lib/request");
const { send } = require("express/lib/response");
const { chats } = require("./data/data");
const { connect } = require("mongoose");
const connectDB = require("../config/db");
const userRoutes =require("../backend/routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const  app = express();
dotenv.config();
connectDB();

app.use(express.json()); //to accept json data

app.get("/",(req,res)=>{
    res.send("API IS RUNNING");
})

app.use("/api/user",userRoutes);


app.use(notFound)
app.use(errorHandler)



const PORT=process.env.PORT || 5000;

app.listen(PORT,console.log(`Server is starting ${PORT}`));
