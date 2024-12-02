const fs = require('fs');
const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';

module.exports = function (req, res, next) {
  const apiKey = req.header('x-api-key');

  if (!apiKey) {
    return res.status(401).send({ message: 'API key is missing' });
  }

  fs.readFile(VALID_KEYS_PATH, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send({ message: 'Failed to read API keys' });
    }

    const validKeys = data.split('\n').map(key => key.trim()).filter(key => key);
    
    if (validKeys.includes(apiKey.trim())) {
      next();
    } else {
      return res.status(401).send({ message: 'Invalid API key' });
    }
  });
};
