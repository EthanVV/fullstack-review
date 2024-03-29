const request = require('request');
const config = require('../config.js');


let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let result = null;

  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, (error, response) => {
    if (error) {
      callback(error, null);
    } else {
      result = JSON.parse(response.body);
      callback(null, result);
    }
  });
}

module.exports.getReposByUsername = getReposByUsername;