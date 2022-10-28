const express = require('express');
require('dotenv').config();
const notes = require('./data/note');
// create app
const app = express();

// endpoint

app.get('/', (req, res) => {
  res.send('api is running');
});

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
  res.json(notes[req.params.id]);
});
// listen
const port = process.env.PORT || 5000;
app.listen(port, () => console.log('server listening on port 5000'));
