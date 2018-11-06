const sequelize = require('./db');
const User = sequelize.import('./models/user')
const BucketPoi = sequelize.import('./models/bucketpoi');
const BucketRest = sequelize.import('./models/bucketrest');
const BucketTour = sequelize.import('./models/buckettour');

User.hasMany(BucketPoi);
BucketPoi.belongsTo(User)

User.hasMany(BucketRest);
BucketRest.belongsTo(User)

User.hasMany(BucketTour);
BucketTour.belongsTo(User)



sequelize.sync() //Pass in {force: true} for resetting tables.
.then(console.log('database is created'))