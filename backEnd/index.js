const express = require('express')
const app = express()
require("dotenv").config()
const port = process.env.PORT || 9000 ;
app.use("/fetch",require('./routes/routes'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})