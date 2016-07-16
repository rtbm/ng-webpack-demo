const users = require('../api/users.json');
const express = require('express');
const path = require('path');
const app = express();
const distPath = path.join(__dirname, '../public');

app.use(require('cors')());

app.use(express.static(distPath, {
  cacheControl: true,
  maxAge: 86400000,
  index: 'index.html',
}));

app.get('/users.json', (req, res) => {
  return res.send(users);
});

module.exports = app;
