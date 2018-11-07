const sequelize = require('./db');
const User = sequelize.import('./models/user')
const BucketPoi = sequelize.import('./models/bucketpoi');
const BucketRest = sequelize.import('./models/bucketrest');
const BucketTour = sequelize.import('./models/buckettour');
const BucketPoiComplete = sequelize.import('./models/bucketpoiComplete');
const BucketRestComplete = sequelize.import('./models/bucketrestComplete');
const BucketTourComplete = sequelize.import('./models/buckettourComplete');

User.hasMany(BucketPoi);
BucketPoi.belongsTo(User)

User.hasMany(BucketRest);
BucketRest.belongsTo(User)

User.hasMany(BucketTour);
BucketTour.belongsTo(User)


//associating "saved items" tables to "completed items" tables
User.hasMany(BucketPoiComplete);
BucketPoiComplete.belongsTo(User);

User.hasMany(BucketRestComplete);
BucketRestComplete.belongsTo(User);

User.hasMany(BucketTourComplete);
BucketTourComplete.belongsTo(User);



sequelize.sync() //Pass in {force: true} for resetting tables.
.then(console.log('database is created'))