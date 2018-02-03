const express = require('express');
const router = express.Router();

const { encrypt, decrypt } = require('../modules/crypt.js');

router.get('/enc', (request, response, next) => {
	const { data, key } = request.query;
	response.send({ data: encrypt(data, key) });
});

router.get('/dec', (request, response, next) => {
	const { data, key } = request.query;
	response.send({ data: decrypt(data, key) });
});

module.exports = router;
