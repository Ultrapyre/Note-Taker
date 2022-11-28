const notes = require('express').Router();
//fsUtils for interacting with the db.json file.
const { readFromFile, writeToFile, readAndAppend } = require("../helpers/fsUtils.js")
//This is where all the API calls for note-taker will be handled. There's three API calls total: GET, POST, and DELETE.

//A simple GET, just grabs the entries from the db.json.
notes.get("/", (req, res) => {
    readFromFile("./db/db.json").then(data => res.json(JSON.parse(data)))
});

//Takes in the title and the text, and appends the result onto the db.json.
notes.post("/", (req, res) => {
    console.log(req.body)
    const {title, text} = req.body;

    if(req.body){
        const newNote = {
            title,
            text
        }
        readAndAppend(newNote, "./db/db.json");
        res.json("Note posted successfully!")
    }
    else{
        res.error("Oops, something broke! Note not added.")
    }
});

//Deletes a chosen note from db.json.
notes.delete("/:entry", (req, res) => {
    //The note that needs to be deleted is what's specified in the parameters, so that's defined.
    const toBeDeleted = req.params.entry;
    //Data is read from db.json, and parsed into a workable format.
    readFromFile("./db/db.json")
    .then(data => JSON.parse(data))
    .then(json => {
        //Picks out the note that is to be deleted, then returns the rest.
        const result = json.filter((note) => note !== toBeDeleted)
        //Overwrites db.json with the changed array.
        writeToFile("./db/db.json", result)

        res.json(`Entry number ${noteId} deleted!`)
    })
});

module.exports = notes;