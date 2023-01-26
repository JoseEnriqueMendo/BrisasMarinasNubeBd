
const cors = require("cors");
const dotenv = require("dotenv");
const serverless = require("serverless-http");
const express = require("express");
const app = express();
const rutas=require("./routes/index");


dotenv.config();

//middleware
app.use(express.json()); //req.body
app.use(cors());

//ROUTES//
app.use("/", rutas);


module.exports.handler = serverless(app);