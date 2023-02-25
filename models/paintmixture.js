'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaintMixture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PaintMixture.init({
    paintId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Paints',
        key: 'id'
      }
    },
    mixtureId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Mixtures',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'PaintMixture',
  });
  return PaintMixture;
};