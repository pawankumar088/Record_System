const connectToMongo = require('./db');
const express = require('express');
let cors = require('cors');
connectToMongo();
const app = express()
const PORT = process.env.PORT || 5000;
app.use(cors())

app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

if (process.env.NODE_ENV == "production") {

  app.use(express.static("client/build"));

  const path = require("path");

  app.get("*", (req, res) => {

    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

  })
}
app.listen(PORT, () => {
  console.log(` Notebook listening at http://localhost:${PORT}`)
})