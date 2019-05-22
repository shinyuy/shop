const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const ProductSchema = new Schema(
  {
    title: {
      required: true,
      type: String,
      unique: 0,
      maxlength: 100
    },
    price: {
      required: true,
      type: Number
    },
    description: {
      required: true,
      type: String,
      maxlength: 1000
    },
    categories: {
      required: true,
      type: String
    },
    images: {
      type: Array,
      required: true,
      default: []
    }
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Product", ProductSchema);