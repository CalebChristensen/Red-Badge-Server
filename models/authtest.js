module.exports = function(sequelize, DataTypes) {
  return sequelize.define('authtest',{
    username: DataTypes.STRING,
    authcomment: DataTypes.STRING(525000),
  });
};