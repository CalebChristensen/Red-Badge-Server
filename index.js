require('dotenv').config();

let express = require('express');
let index = express();
let bodyParser = require('body-parser');
let user = require('./controllers/usercontroller');
let id = require('./controllers/idcontroller');
let country = require('./controllers/countrycontroller');
let bucketpoi = require('./controllers/bucketpoicontroller');
let bucketrest = require('./controllers/bucketrestcontroller');
let buckettour = require('./controllers/buckettourcontroller');
let notes = require('./controllers/notescontroller')

let bucketpoiComplete = require('./controllers/bucketpoiCompletecontroller');
let bucketrestComplete = require('./controllers/bucketrestCompletecontroller');
let buckettourComplete = require('./controllers/buckettourCompletecontroller');


index.use(bodyParser.json());
index.use(require('./middleware/headers'));

index.use('/user', user);
index.use('/id', id);
index.use('/country', country);
index.use('/bucketpoi', bucketpoi);
index.use('/bucketrest', bucketrest);
index.use('/buckettour', buckettour);
index.use('/notes', notes)
index.use('/completepoi', bucketpoiComplete);
index.use('/completerest', bucketrestComplete);
index.use('/completetour', buckettourComplete);




index.use(require('./middleware/validate-session'));
require('./associations')
index.listen(process.env.PORT, function(){console.log('We Live out on dat super secret server!')});