module.exports = function(sequelize, DataTypes) {
    return sequelize.define('buckettourComplete',{
      name: DataTypes.STRING,
      starts_on: DataTypes.DATEONLY,
      url: DataTypes.STRING
    });
  };
  