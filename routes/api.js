'use strict'

const express = require('express');
const imageSearch = require('../service/image-search');

const api = express.Router();


api.get('/search/:term', (req, res) => {
  let term = req.params.term;
  let offset = req.query['offset'];

  imageSearch.search(term, offset, (err, items) => {
    if (err) {
      res.json(err);
    } else {
      res.json(parseResult(items));
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


// Private helper
function parseResult(result) {
  return result.map((item) => ({
    url: item.link,
    snippet: item.snippet,
    thumbnail: item.image.thumbnailLink,
    context: item.image.contextLink
  }));
}


module.exports = api;