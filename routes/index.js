const express = require('express');
//A router to redirect notes.js API call. It's also the ONLY one so it's a little redundant, but it's good practice...
const notesRouter = require("./notes.js");

const app = express();
app.use("/notes", notesRouter);

module.exports = app;