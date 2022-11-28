const notes = require('express').Router();
//This is where all the API calls for note-taker will be handled. There's three API calls total: GET, POST, and DELETE.

notes.get("/", (req, res) => {

});

notes.post("/", (req, res) => {

});

notes.delete("/:id", (req, res) => {
    const noteId = req.params.id;
});

module.exports = notes;