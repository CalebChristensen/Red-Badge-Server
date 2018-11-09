const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.DATABASE_URL || `postgresql://postgres:${encodeURIComponent(process.env.PASS)}@localhost/redbadge`, {
  dialect: 'postgres'
})

sequelize.authenticate().then(
  () => console.log('Connected to Red Badge postgres database'),
  (err) => console.log(err)
)

module.exports = sequelize