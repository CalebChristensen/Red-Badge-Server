module.exports = function(sequelize, DataTypes) {
  return sequelize.define('buckettour',{
    name: DataTypes.STRING,
    starts_on: DataTypes.DATEONLY,
    url: DataTypes.STRING
  });
};
