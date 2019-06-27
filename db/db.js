const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/meetUp';
const db = mongoose.connect(mongoURI, {useNewUrlParser: true});

db  // connection
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`Problem connecting to mongo at: ${mongoURI} Err: ${err}`);
  });

  // Schema and Model
const attendeeSchema = new mongoose.Schema({
  id: Number,
  firstName: String,
  lastName: String,
  email: String,
  skillLevel: String
});

const Attendee = mongoose.model('Attendee', attendeeSchema);

module.exports = Attendee; // Must export correctly