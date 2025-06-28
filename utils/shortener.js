const crypto = require('crypto');

const generateShortUrl = (longUrl) => {
  const hash = crypto.createHash('sha256').update(longUrl).digest('hex');
  return hash;
};

module.exports = generateShortUrl;