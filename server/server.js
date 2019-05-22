const express = require('express');
const router = express.Router();
require('dotenv').config(); 
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require("morgan");
const formidable = require('express-formidable');
const cloudinary = require('cloudinary');
var cors = require('cors');
const Product = require("./models/product");
const app = express(); 
const mongoose = require('mongoose');
const port = process.env.PORT || 8000; 


app.use(cors());

// Connect to database
const dbRoute = `mongodb://${process.env.dbName}:${process.env.dbPassword}@ds143156.mlab.com:43156/shop`;
mongoose.connect( 
  dbRoute,
  { useNewUrlParser: true } 
);
let db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));
// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger('dev'));

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

router.post('/images/uploadimage', formidable(), (req, res) => {
  cloudinary.uploader.upload(req.files.file.path, (result) => {
    console.log(result);
    res.status(200).send({
      public_id: result.public_id,
      url: result.url
    })
  }, {
      public_id: `${Date.now()}`,
      resource_type: 'auto'
    })
})

router.post("/addproduct", (req, res) => {
  let product = new Product();

  const { title, price, description, categories,images } = req.body;

  if (!title || !price || !description || !categories || !images) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  product.title= title;
  product.price = price;
  product.description = description;
  product.categories = categories;
  product.images = images;
  product.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
  console.log(product);
});

// append /api for our http requests
app.use("/api", router);

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})