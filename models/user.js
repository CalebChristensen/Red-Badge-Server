module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            notEmpty: true,
            msg: 'Username cannot be blank'
          }
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true,
            notEmpty: true,
            msg: 'Email must be valid'
          }
        },
        passwordhash: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [5,20],
              notEmpty: true,
              msg: 'Password must be between 5 and 20 characters'
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