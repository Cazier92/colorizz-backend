'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Profile.belongsTo(models.User, { foreignKey: 'userId' })

      Profile.hasMany(models.Paint, {
        as: 'paintsAdded',
        foreignKey: 'profileId',
      })
      Profile.hasMany(models.Mixture, {
        as: 'mixtures',
        foreignKey: 'profileId',
      })

      Profile.hasOne(models.Palette, {
        as: 'palette',
        foreignKey: 'profileId',
      })
    }
  }

  Profile.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Profile',
  })
  return Profile
}
