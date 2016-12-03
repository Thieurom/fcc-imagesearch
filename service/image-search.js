'use strict'

const MongoClient = require('mongodb').MongoClient;
const DATABASE = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/data-dev';


exports.search = function(term, offset, callback) {

};

exports.latest = function(callback) {
  MongoClient.connect(DATABASE, (err, db) => {
    if (err) {
      console.log('Unable to connect to mongoDB server. Error: ', err);
      callback({error: 'Unable to connect to mongoDB server.'});
    } else {
      console.log('Established connection to mongoDB server.');

      let collection = db.collection('imageSearches');
      // Get 10 latest search terms
      collection.find().sort({_id: -1}).limit(10).toArray((err, items) => {
        if (err) {
          console.log('Error when querying database: ', err);
          callback({error: 'Error when querying database.'});
        } else {
          console.log('Query result: ', items);
          callback(null, items);
        }

        db.close();
      });
    }
  });
};