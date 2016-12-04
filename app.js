'use strict'

const express = require('express');
const api = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send(`
  <ul>
    <li>Go to <a href='https://u-imagesearch.herokuapp.com/api/search' target='_blank' rel='noopener noreferrer'>https://u-imagesearch.herokuapp.com/api/search</a> for image search.</li>
    <li>Or to <a href='https://u-imagesearch.herokuapp.com/api/latest' target='_blank' rel='noopener noreferrer'>https://u-imagesearch.herokuapp.com/api/latest</a> to get latest search terms.</li>
  </ul>
  `.trim());
});


app.use('/api', api);


app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT} ...`);
});