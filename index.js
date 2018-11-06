require('dotenv').config();

let express = require('express');
let index = express();
let test = require('./controllers/testcontroller');
let user = require('./controllers/usercontroller');
let id = require('./controllers/idcontroller');
let country = require('./controllers/countrycontroller');
let destination = require('./controllers/destinationcontroller')
let sequelize = require('./db');
let bodyParser = require('body-parser');

//sequelize.sync(); //Pass in {force: true} for resetting tables.

index.use(bodyParser.json());
index.use(require('./middleware/headers'));

index.use('/user', user);
index.use('/test', test);
index.use('/id', id);
index.use('/country', country);
index.use('/destination', destination);


index.use(require('./middleware/validate-session'));
require('./associations')
index.listen(process.env.PORT, function(){console.log('We Live out on dat super secret server!')});