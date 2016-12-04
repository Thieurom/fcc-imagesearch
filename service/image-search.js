'use strict'

const MongoClient = require('mongodb').MongoClient;
const qs = require('querystring');
const request = require('request');

// Google custom search engine (cse)
const cseBaseUrl = 'https://www.googleapis.com/customsearch/v1';

const DATABASE = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/data-dev';

// Custom search engine identity
const CSE_ID = process.env.CSE_ID || 'custom_search_engine_identity';
// Custom search engine API key
const API_KEY = process.env.API_KEY || 'custom_search_engine_api_key';


exports.search = function (term, offset, callback) {
  let parameters,
    searchUrl;

  let start = 1;

  // Build search url
  if (offset !== undefined) {
    if (/^[1-9]$/.test(offset) || offset === '10') {
      start += 10 * (parseInt(offset) - 1);
    } else {
      return callback({ error: 'Invalid offset parameter. Offset value must be integer of 1 to 10.' })
    }
  }

  parameters = {
    key: API_KEY,
    cx: CSE_ID,
    searchType: 'image',
    q: term,
    start: start
  };

  searchUrl = cseBaseUrl + '?' + qs.stringify(parameters);

  // Make a search against search engine
  request({ url: searchUrl, json: true }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      MongoClient.connect(DATABASE, (err, db) => {
        if (err) {
          console.log('Unable to connect to mongoDB server. Error: ', err);
          callback({ error: 'Unable to connect to mongoDB server.' });
        } else {
          console.log('Established connection to mongoDB server.');

          let collection = db.collection('imageSearches');

          // Insert new record for the sucessfull search session
          try {
            collection.insertOne({
              term: term,
              when: new Date()
            }, () => {
              db.close();
            });
          } catch (e) {
            console.log('Error when writing to database: ', e);
            callback({ error: 'Error when writing to database.' })
          }
        }
      });

      callback(null, body.items);
    } else {
      callback({ error: 'Error when searching with custom search engine' });
    }
  });
};


exports.latest = function (callback) {
  MongoClient.connect(DATABASE, (err, db) => {
    if (err) {
      console.log('Unable to connect to mongoDB server. Error: ', err);
      callback({ error: 'Unable to connect to mongoDB server.' });
    } else {
      console.log('Established connection to mongoDB server.');

      let collection = db.collection('imageSearches');
      // Get 10 latest search terms, on reverse chronological order
      collection.find({}, { _id: 0 }).sort({ _id: -1 }).limit(10).toArray((err, items) => {
        if (err) {
          console.log('Error when querying database: ', err);
          callback({ error: 'Error when querying database.' });
        } else {
          console.log('Query result: ', items);
          callback(null, items);
        }

        db.close();
      });
    }
  });
};