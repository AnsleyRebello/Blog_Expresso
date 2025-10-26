const express = require("express");
const  connectMongoDb = require('./connection')
const userRouter = require('./routes/user')
const logReqRes = require('./middlewares/index')

const app = express(); // create an instance
const PORT = 3000;

// Connection 
// You can say calling the Function
connectMongoDb("mongodb://127.0.0.1:27017/nude-1-app")
  .then(() => {
    console.log("connection to MongoDB successful");
    
  })

// Middleware to parse JSON bodies || Plugin || Content-Type application/json ko dekhke parse karta hai to the next middleware.
app.use(express.json());

// under the hood
// req.body = JSON.parse(rawJSONstring);

app.use(logReqRes("log.txt"))

// Routes
app.use("/api/users", userRouter); // now "/" = "/user" and rest of the path is given to userRouter to handle

// run app
app.listen(PORT, () => console.log(`Server starting at port PORT:${PORT}`));
