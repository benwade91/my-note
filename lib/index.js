const fs = require("fs");
const path = require("path");


function createNewNote(body, notes) {
    const newNote = body;
    console.log(notes, body);
    notes.push(newNote);
    fs.writeFileSync(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify({ notes }, null, 2)
    );
    return newNote;
}
  
function deleteNote(id, notes) {
    let newNotes = notes;
    newNotes = newNotes.filter(note => note.id === parseInt(id));
    let noteToDelete = notes.indexOf(newNotes[0]);
    notes.splice(noteToDelete, 1);
    fs.writeFileSync(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify({ notes }, null, 2)
    );
    return notes;
}

  module.exports = {
    createNewNote,
    deleteNote
  };