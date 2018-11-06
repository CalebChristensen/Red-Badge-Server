module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            notEmpty: true
          }
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true,
            notEmpty: true
          }
        },
        passwordhash: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notEmpty: true
            }
        },
        admin: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
          allowNull: false
        }
    });
    return User
};