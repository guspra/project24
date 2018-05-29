const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if(err){
    console.log('Ooops!! Can NOT connect to database ', err);
  } else{
    console.log('Yaaay! Connected to db: ' + config.db);
  }
});

app.use(express.static(__dirname + '/clientz/dist/clientz'));

//app.get('/', (req, res) => {
app.get('*', (req, res) => {
  //res.send('<h1>Om Swastyastu World!<h1>');
  res.sendFile(path.join(__dirname + '/clientz/dist/clientz/index.html'));
});

app.listen(2424, () => {
  console.log("Oit! Listening to port 2424");
});
