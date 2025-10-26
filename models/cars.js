const mongoose = require('mongoose')

const carSchema = new mongoose.Schema(
  {
    car_Name: {
      type: String,
      required: true
    },
    car_Brand: {
      type: String,
      required: true
    },
    car_Price: {
      type: Number,
      required: true
    }
  }
)

const Car = mongoose.model("car", carSchema); // maps the model 

module.exports = { Car }