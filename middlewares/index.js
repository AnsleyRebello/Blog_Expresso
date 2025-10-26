const fs = require("fs");

const logReqRes = (filename) => {
  return (req, res, next) => {
    console.log("Hello from Middleware 1");

    fs.appendFile(
      filename,
      `\n${Date.now()}: ${req.ip} ${req.method} ${req.path}`,
      (err) => {
        if (err) {
          console.error("Error writing to log file:", err);
        }
        next(); // move to next middleware AFTER writing log
      }
    );
  };
};

module.exports = logReqRes;
