const users = require('../api/users.json');
const express = require('express');
const app = express();

app.use(require('cors')());
app.use(require('morgan')());

app.get('/users/findall', (req, res) => {
  return res.send(users);
});

app.get('/users/find/:userId', (req, res) => {
  const user = users.find(n => n.id === Number(req.params.userId));
  return res.json(user);
});

app.post('/users/edit/:userId', (req, res) => {
  const user = users.find(n => n.id === Number(req.params.userId));
  return res.json(user);
});

app.post('/users/remove/:userId', (req, res) => {
  const user = users.find(n => n.id === Number(req.params.userId));
  return res.json(user);
});

module.exports = app;
