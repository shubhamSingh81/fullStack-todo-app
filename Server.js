const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes  = require('./routes/TodoRoute');

require('dotenv').config();

const app = express();
const PORT = process.env.port || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err))

// middleware
app.use(routes);

app.use(express.json()); // -> allows us to access the req.body;

app.listen(PORT, ()=>{
    console.log(`server is connected on ${PORT}`);
})

