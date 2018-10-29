module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        passwordhash: {
            type: DataTypes.STRING,
            allowNull: false,
            maxlength: 5
        }
    });
    return User
};