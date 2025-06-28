const Url = require('./../db/urlModel');
const shortid = require('shortid');

const createShortUrl = async (req, res) => {
  try {
    const { originalUrl, validityMinutes } = req.body;
    if (!originalUrl) {
      return res.status(400).json({ error: 'originalUrl is required' });
    }

    const minutes = validityMinutes && Number(validityMinutes) > 0 ? Number(validityMinutes) : 30;
    const expiresAt = new Date(Date.now() + minutes * 60 * 1000);

    const shortCode = shortid.generate();

    const url = new Url({
      originalUrl,
      shortenedUrl: shortCode,
      expiresAt
    });

    await url.save();

    res.status(201).json({
      originalUrl,
      shortenedUrl: shortCode,
      expiresAt
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};

const getOriginalUrl = async (req, res) => {
  try {
    const { shorturl } = req.params;
    const url = await Url.findOne({ shortenedUrl: shorturl });

    if (!url) {
      return res.status(404).json({ error: 'Short URL not found or expired' });
    }

    res.status(200).json({ originalUrl: url.originalUrl,
      expiresAt: url.expiresAt });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};

module.exports = {
  createShortUrl,
  getOriginalUrl
};