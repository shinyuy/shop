const express = require("express");
const router = express.Router();
require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const formidable = require("express-formidable");
const cloudinary = require("cloudinary");
var cors = require("cors");  
const app = express();     
const mongoose = require("mongoose");
const port = process.env.PORT || 8000;

//  Models
const Product = require("./models/product");
const User = require("./models/user");

// Middlewares
const { auth } = require('./middlewares/auth');
const { admin } = require('./middlewares/admin');

app.use(cors());  

// Connect to database
const dbRoute = `mongodb://${process.env.dbName}:${
  process.env.dbPassword
}@ds143156.mlab.com:43156/shop`;
mongoose.connect(dbRoute, { useNewUrlParser: true });
let db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));
// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger("dev"));

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

// this is our get method this method fetches all available data in our database
router.get("/getproduct", (req, res) => {
  Product.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
  console.log();
});


  /***************************************
 //      Products                      //
 **************************************/

// this our get method for a single applicant this method fetches a single data object by id from the database.
router.get("/getproduct/:id", (req, res) => {
  let id = req.params.id;
  Product.findById(id, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

router.post("/updateproduct/:id", (req, res) => {
  let id = req.params.id;
  const { title, price, description, categories, images } = req.body;
  Product.findById(id, (err, data) => {
    let product = data;
    if (!data) res.status(404).send("data is not found");
    else if (!title || !price || !description || !categories)
      return res.json({
        success: false,
        error: "INVALID INPUTS"
      });
    else product.title = title;
    product.price = price;
    product.description = description;
    product.categories = categories;
    product.images = images;
    product.save(err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });
});

router.post("/images/uploadimage", formidable(), (req, res) => {
  cloudinary.uploader.upload(
    req.files.file.path,
    result => {
      console.log(result);
      res.status(200).send({
        public_id: result.public_id,
        url: result.url
      });
    },
    {
      public_id: `${Date.now()}`,
      resource_type: "auto"
    }
  );
});

router.post("/addproduct", (req, res) => {
  let product = new Product();

  const { title, price, description, categories, images } = req.body;

  if (!title || !price || !description || !categories || !images) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  product.title = title;
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

router.delete("/deleteproduct/:id", (req, res) => {
  let id = req.params.id;

  Product.findByIdAndRemove(id, (err, data) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Product successfully deleted",
      id: data._id
    };  
    return res.status(200).send(response);
  });
});



  /***************************************
 //      Users                         //
 **************************************/

router.get('/auth', auth, (req, res)=>{
  res.status(200).json({
      isAdmin: req.user.role === 0 ? false : true,
      isAuth: true,
      email: req.user.email,
      firstname: req.user.firstname,
      lastname: req.user.lastname,
      phoneNumber: req.user.phoneNumber,
      role: req.user.role,
      cart: req.user.cart,
      history: req.user.history
  }) 
})


 router.post("/register", (req, res) => {
   const user = new User(req.body);
   user.save((err, doc) => {
     if (err) return res.json({ success: false, err });
     res.status(200).json({
       success: true,
       userData: doc
     });
   });           
 }); 

 router.post('/login', (req, res)=>{
  //Find the email
  User.findOne({'email': req.body.email},(err, user)=>{
      if(!user) return res.json({loginSuccess: false, message:'Auth failed, email not found'});

      //Grab the password and check
      user.comparePassword(req.body.password, (err, isMatch)=>{
          if(!isMatch) return res.json({loginSuccess: false, message: 'Wrong Password or Email'});
         
          //Generate a new token
          user.generateToken((err, user)=>{
              if(err) return res.status(400).send(err);
              res.cookie('w_auth',user.token).status(200).json({loginSuccess: true})
          })
      })
  })    
}); 

router.get('/logout', auth,(req, res)=>{ 
  User.findOneAndUpdate(
      {_id: req.user._id},
      {token: ''},
      (err, doc)=>{
          if(err) return res.json({success: false, err});
          return res.status(200).send({
              success: true
          })
      }
      )
})


// append /api for our http requests
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
