const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

// coppied from quickStart likely not needed
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', console.log('connected!'));

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  full_name: String,
  owner: {
    login: String,
    id: Number
    // add more as needed
  }
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

// testing bellow
let testRepo = new Repo(1234, 'nameOfASupposedRepo', 'fullName', {login: 'login', id: '0904'});
console.log(testRepo.id);

module.exports.save = save;