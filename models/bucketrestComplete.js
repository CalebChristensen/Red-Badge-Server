module.exports = function(sequelize, DataTypes) {
    return sequelize.define('bucketrestComplete',{
      name: DataTypes.STRING,
      name_suffix: DataTypes.STRING(525000),
      url: DataTypes.STRING
    });
  };