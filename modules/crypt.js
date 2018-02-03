const crypto = require('crypto');

const ALGORITHM = 'aes-256-ctr';
const IN_ENCODING = 'utf8';
const OUT_ENCODING = 'hex';

const encrypt = (data, password) => {
	const cipher = crypto.createCipher(ALGORITHM, password);
	let crypted = cipher.update(data, IN_ENCODING, OUT_ENCODING);

	crypted += cipher.final(OUT_ENCODING);
	return crypted;
};

const decrypt = (data, password) => {
	const decipher = crypto.createDecipher(ALGORITHM, password)
	let dec = decipher.update(data, OUT_ENCODING, IN_ENCODING);

	dec += decipher.final(IN_ENCODING);
	return dec;
};

module.exports = {
	encrypt,
	decrypt,
};
