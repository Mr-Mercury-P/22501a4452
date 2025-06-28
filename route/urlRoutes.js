const express = require('express');
const UrlController = require('../controller/urlController.js');

const router = express.Router();
const urlController = require('../controller/urlController');

router.post('/shorturls', urlController.createShortUrl);
router.get('/shorturls/:shorturl', urlController.getOriginalUrl);

module.exports = router;

