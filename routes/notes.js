const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helper/fsUtils');
const uuid = require('../helper/uuid');

notes.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });
