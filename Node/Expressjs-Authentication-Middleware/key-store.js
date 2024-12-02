const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const fs = require('fs');
const shortid = require('shortid');
const LINE_ENDING = require('os').EOL;

module.exports = function (req, res) {
  const apiKey = shortid.generate();
  fs.appendFile(VALID_KEYS_PATH, apiKey + LINE_ENDING, (err) => {
    if (err) {
      res.status(500).send({ message: 'Failed to generate API key' });
    } else {
      res.status(200).send({ apiKey });
    }
  });
};
