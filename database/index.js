const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {
  useMongoClient: true
});

// coppied from quickStart likely not needed
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => (console.log('connected!')));

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  full_name: String,
  owner: {
    login: String,
    id: Number
  }
});

let Repo = mongoose.model('Repo', repoSchema);

let saveThing = (data) => {
  let temp = data[0];
  console.log(Object.keys(temp));
  console.log(temp.size);
  Repo.create({
    id: temp.data,
    name: temp.name,
    full_name: temp.full_name,
    owner: temp.owner,
    
  })

  Repo.findOne().exec((err, repo) => {
    console.log(repo);
  })
  // for (element of data) {
  //   Repo.create({

  //   })
  // }
}

// testing bellow
// let testRepo = new Repo(1234, 'nameOfASupposedRepo', 'fullName', {login: 'login', id: '0904'});


module.exports.save = saveThing;