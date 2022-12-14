const express = require('express');
const path = require('path');
const api = require("./routes/index.js")

const app = express();
//A specific port for the app to broadcast from.
const PORT = process.env.PORT || 8000;

//A bunch of app.use functions that allow the website to process API calls.
app.use(express.json())
app.use('/api', api);

//Allows the server to serve up the files from "public".
app.use(express.static("public"));

//Serves up index.html when the root is opened, and goes to notes.html when the button that links to /notes is pressed.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"))
});

app.get('/notes', (req, res) =>{
  res.sendFile(path.join(__dirname, "/public/notes.html"))
})

app.listen(PORT, () =>
  console.log(`Now listening.`)
);