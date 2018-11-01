module.exports = (sequelize, DataTypes) => {
  const Id = sequelize.define('ids', {
        cityIds: {
          type: DataTypes.INTEGER,
        },
        cityName: {
          type: DataTypes.TEXT,
        },
        countryIds: {
            type: DataTypes.INTEGER,
        },
        countryName: {
          type: DataTypes.TEXT,
      }
    });
    return Id
};