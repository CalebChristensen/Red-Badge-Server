require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize('redbadge', 'postgres', process.env.PASS, {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize.authenticate().then(
  function() {
    console.log('Connected to Red Badge postgres database');
  },
  function(err) {
    console.log(err);
  }
);

module.exports = sequelize;