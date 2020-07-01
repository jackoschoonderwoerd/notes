const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello');
});

// Body parser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('send', (req, res) => {
  console.log(req.body);
})

app.listen(3000, () => {
  console.log('server started');
})
