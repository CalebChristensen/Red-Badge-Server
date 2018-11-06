require('dotenv').config();

let express = require('express');
let index = express();
let bodyParser = require('body-parser');
let user = require('./controllers/usercontroller');
let id = require('./controllers/idcontroller');
let country = require('./controllers/countrycontroller');
let bucketpoi = require('./controllers/bucketpoicontroller');
let bucketrest = require('./controllers/bucketrestcontroller');
let buckettours = require('./controllers/buckettourcontroller');

index.use(bodyParser.json());
index.use(require('./middleware/headers'));

index.use('/user', user);
index.use('/id', id);
index.use('/country', country);
index.use('/bucketpoi', bucketpoi);
index.use('/bucketrest', bucketrest);
index.use('/buckettours', buckettours);

index.use(require('./middleware/validate-session'));
require('./associations')
index.listen(process.env.PORT, function(){console.log('We Live out on dat super secret server!')});