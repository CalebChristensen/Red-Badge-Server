module.exports = (sequelize, DataTypes) => {
    return sequelize.define('note', {
        note: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    })
}