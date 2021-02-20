const path = require('path');
const router = require('express').Router();
const {
  createNewNote,
  deleteNote
} = require("../../lib/index.js");
const {
  notes
} = require("../../db/db.json")

router.get('/notes', (req, res) => {
  res.json(notes)
});

router.post('/notes', (req, res) => {
  req.body.id = parseInt(Math.random() * 100000000000);
  const note = createNewNote(req.body, notes);
  res.json(note);
})

router.delete('/notes/:id', (req, res) => {
  const newNotes = deleteNote(req.params.id, notes);
  res.json(newNotes)
})



module.exports = router;