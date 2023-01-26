const serverless = require("serverless-http");
const express = require("express");
const app = express();
const rutas=require("./routes/index");

app.use(express.json()); //req.body
app.use(cors());

app.use("/",rutas);



module.exports.handler = serverless(app);