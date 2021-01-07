const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const adminRoutes = require("./src/router/adminRoutes");
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const mongooseOptions = {  useNewUrlParser: true ,useUnifiedTopology: true,useCreateIndex: true,useFindAndModify: false}
mongoose.connect('mongodb://localhost:27017/bestDelivery',mongooseOptions)
   .then(()=>console.log("db connected"))
   .catch((err)=>console.log(err));

 //Routes
app.use("/admin",adminRoutes);
const port = process.env.PORT || 8080;

app.listen(port,()=>console.log(`server running this port ${port}`)); 