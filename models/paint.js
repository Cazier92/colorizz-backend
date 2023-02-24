'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Paint extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Paint.belongsTo(models.Profile, { foreignKey: 'profileId' })
    }
  }
  Paint.init({
    name: DataTypes.STRING,
    pigment_code: {
      type: DataTypes.ENUM('PY', 'PO', 'PR', 'PV', 'PB', 'PG', 'PBr', 'PBk', 'PW', 'PM'),
    },
    pigment_number: DataTypes.INTEGER,
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    transparency: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 4,
      },
    },
    staining: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 4,
      },
    },
    granulation: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 4,
      },
    },
    brand: DataTypes.STRING,
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
    modelName: 'Paint',
  });
  return Paint;
};