'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Palette extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Palette.belongsTo(models.Profile, {
        foreignKey: 'profileId'
      })
      
      Palette.belongsToMany(models.Paint, {
        as: 'paints',
        through: models.PaintPalette,
        foreignKey: 'paletteId',
      })
      // Palette.hasMany(models.Paint, {
      //   foreignKey: 'paletteId',
      //   as: 'paints'
      // })
    }
  }
  Palette.init({
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id',
      }
    },
    name: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Palette',
  });
  return Palette;
};