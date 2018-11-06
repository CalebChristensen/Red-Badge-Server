const sequelize = require('./db');
const User = sequelize.import('./models/user')
const Destination = sequelize.import('./models/destination');

User.hasOne(Destination);
Destination.belongsTo(User)

sequelize.sync()
.then(console.log('database is created'))