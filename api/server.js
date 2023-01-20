const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const { json } = require('body-parser');
const { nanoid } = require('nanoid');

const characters = require('./characters.json')

dotenv.config({ path: './config.env' });

const app = express();

app.use(cors());
app.use(json());

app.get('/characters', (req, res) => res.send(characters));

//   app.post('/characters', (req, res) => {
//     const note = { ...req.body, id: nanoid() };
//     notes.push(note);
//     return res.send(note);
//   });

//   app.patch('/notes/:id', (req, res) => {
//     const id = req.params.id;
//     const index = notes.findIndex((note) => note.id == id);
//     const color = req.body.color;
//     if (index > -1) {
//       notes[index].color = color;
//     }
//     return res.send(notes[index]);
//   });

//   app.delete('/notes/:id', (req, res) => {
//     const id = req.params.id;
//     const index = notes.findIndex((note) => note.id == id);
//     if (index > -1) {
//       notes.splice(index, 1);
//     }

//     res.send(notes);
//   });

const PORT = 7000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));