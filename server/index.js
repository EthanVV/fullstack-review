const express = require('express');
let app = express();
let bodyParser = require('body-parser');
let githubSearch = require('../helpers/github.js').getReposByUsername;

app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  let searchTerm = req.body.search;

  console.log(searchTerm);
  githubSearch(searchTerm);
  //res.status(201).end();
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
