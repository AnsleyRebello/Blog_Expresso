const mongoose = require('mongoose')

// Schema: Calling a Constructor
// new mongoose.Schema(arg1, arg2)
const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    job_title: {
      type: String,
    },
    gender: {
      type: String,
    },
  },
  { timestamps: true }
);

//  Model Creation or Model Definition 
const User = mongoose.model("user", userSchema); // ("name", schema)
// Mongoose automatically pluralizes "user" → "users"

module.exports = { User };

// const Car = class {          // Car is a class stored in a const
//   constructor() { }
//   drive() { }
// };

// const myCar = new Car();     // Creating instance from the class

// ✅ mongoose.Schema is pre-written, built-in code from the Mongoose library
