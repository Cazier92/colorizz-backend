'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Paints', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      pigment_code: {
        type: Sequelize.ENUM('PY', 'PO', 'PR', 'PV', 'PB', 'PG', 'PBr', 'PBk', 'PW', 'PM'),
      },
      pigment_number: {
        type: Sequelize.INTEGER
      },
      color: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      transparency: {
        type: Sequelize.INTEGER,
        validate: {
          min: 0,
          max: 4,
        },
      },
      staining: {
        type: Sequelize.INTEGER,
        validate: {
          min: 0,
          max: 4,
        },
      },
      granulation: {
        type: Sequelize.INTEGER,
        validate: {
          min: 0,
          max: 4,
        },
      },
      brand: {
        type: Sequelize.STRING
      },
      profileId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Profiles',
          key: 'id',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Paints');
  }
};