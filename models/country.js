module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('countries', {
    countryIds: {
      type: DataTypes.INTEGER,
    },
    countryName: {
      type: DataTypes.TEXT,
    }
  });
  return Country
};