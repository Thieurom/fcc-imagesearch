'use strict'

const express = require('express');
const imageSearch = require('../service/image-search');

const api = express.Router();

api.get('/search:term', (req, res) => {
  let term = req.params.term;
  let offset = req.query['offset'];

  imageSearch.search(term, offset, (err, res) => {
    if (err) {
      res.json(err);
    } else {
      res.json(res);
    }
  });
});

api.get('/latest', (req, res) => {
  imageSearch.latest((err, items) => {
    if (err) {
      res.json(err);
    } else {
      res.json(items);
    }
  });
});

module.exports = api;