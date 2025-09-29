const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// MIDDLEWARE 1: Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'static'))) // middleware.


// MIDDLEWARE 2: Yo Express, for any request that hits / (like /, /about, /post1), let the blog.js router handle it.
app.use('/',require(path.join(__dirname,'routes/blog')))


// Start the server
app.listen(port, () => {
  console.log(`Blog app listening on port ${port}`)
})


