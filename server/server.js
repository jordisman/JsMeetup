const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const db = require('../db/db.js'); //must include filename
const Attendee = require('../db/db.js');
const app = express();
const port = 3000;


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/public'));

// Functions to retrieve and add data

let getAll = (req, res) => {
  Attendee.find((err, attendees) => {
    if (err) {res.send(err); return;}
    // console.log(`attendees: ${attendees}`);
    res.send(attendees);
  });
}

let addNew = (req, res) => {
  let {firstName, lastName, email, skillLevel} = req.body;
  let attendee = new Attendee(req.body);
  attendee.save((err, attendee) => {
    if (err) {res.send(err);}
    console.log(`Post new attendee: ${attendee}`);
    res.send(attendee);
  })
}

app.get(`/attendees`, getAll);
app.post(`/attendees`, addNew);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
})


