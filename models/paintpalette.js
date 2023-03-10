'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaintPalette extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // PaintPalette.belongsTo()
      // PaintPalette.hasMany(models.Paint, {
      //   as: 'paints',
      //   foreignKey: 'paintPaletteId',
      // })
      // PaintPalette.hasMany(models.Palette, {
      //   as: 'palettes',
      //   foreignKey: 'paintPaletteId',
      // })
    }
  }
  PaintPalette.init({
    paintId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Paints',
        key: 'id'
      }
    },
    paletteId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Paints',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'PaintPalette',
  });
  return PaintPalette;
};