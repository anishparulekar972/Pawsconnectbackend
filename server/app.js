const express = require("express");
const path = require('path');
const mysql = require("mysql");
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const db = require('./static/scripts/db');
const apiController = require('./static/controllers/api')

dotenv.config({ path:'./.env' })


const app = express();

const publicDirectory = path.join(__dirname, './static');
app.use(express.static(publicDirectory));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(cookieParser());
console.log(__dirname);

app.set('view engine', 'hbs');

db.connect( (error) => {
  if(error) {
    console.log(error)
  } else {
    console.log("MySQL Connected...")
  }
})

apiController.storedb.connect( (error) => {
  if(error) {
    console.log(error)
  } else {
    console.log("Store Database Connected Via API...")
  }
})

app.use('/', require('./static/scripts/routes'))
app.use('/api', require('./static/scripts/api'))

app.listen(4040, () => {
  console.log("Listening on port: 4040!");
})
