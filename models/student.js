const express = require("express");
const app = express();
const mongoose = require("mongoose");

const connectdb = mongoose
  .connect("mongodb://localhost:27017/Hospital_DB")
  .then(() => {
    console.log("connected ");
  })
  .catch((err) => {
    console.log(err);
  });

const empSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      enum: ["hr", "developer", "clerk"],
    },
    salary: {
      type: Number,
      min: 20000,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const empmodel = mongoose.model("emp", empSchema);

module.exports = { connectdb, empmodel };
