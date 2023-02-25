'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mixture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Mixture.belongsTo(models.Profile, { foreignKey: 'profileId' })

      Mixture.belongsToMany(models.Paint, {
        as: 'paints',
        through: models.PaintMixture,
        foreignKey: 'mixtureId'
      })
    }
  }
  Mixture.init({
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id',
      }
    },
  }, {
    sequelize,
    modelName: 'Mixture',
  });
  return Mixture;
};