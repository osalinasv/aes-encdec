const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Frontend Routes
app.use('/', express.static('./public'));

// API Routes
app.use(bodyParser.json());
app.use('/api', require('./routes/api'));

// Middleware - error handling
app.use((error, request, response, next) => {
	response.status(422).send({
		error: error.message
	});
});

// Listener
app.listen(process.env.PORT || 8080, () => {
	console.log('API listening for requests...');
});
