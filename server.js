const express = require('express');
const path = require('path');

const app = express();
//Temporary port till I learn how to use Hiroku
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"))
});

app.get('/notes', (req, res) =>{
  res.sendFile(path.join(__dirname, "/public/notes.html"))
})

app.listen(PORT, () =>
  console.log(`App open at http://localhost:${PORT}`)
);