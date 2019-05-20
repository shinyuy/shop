const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
  
const app = express(); 
const mongoose = require('mongoose');
require('dotenv').config(); 
const port = process.env.PORT || 8000;

// Connect to database
const dbRoute = process.env.DATABASE;
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);
let db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));
// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})