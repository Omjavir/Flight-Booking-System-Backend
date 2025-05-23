"use strict";
/** @type {import('sequelize-cli').Migration} */ module.exports = {
  async up(queryInterface, Sequelize) {
    /** * Add altering commands here. * * Example: * await queryInterface.createTable('users', { id: Sequelize.INTEGER }); */ await queryInterface.createTable(
      "Airplanes",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        modelNumber: { allowNull: false, type: Sequelize.STRING, unique: true },
        capacity: { type: Sequelize.INTEGER, defaultValue: 0 },
        createdAt: { allowNull: false, type: Sequelize.DATE },
        updatedAt: { allowNull: false, type: Sequelize.DATE },
      }
    );
  },
  async down(queryInterface, Sequelize) {
    /** * Add reverting commands here. * * Example: * await queryInterface.dropTable('users'); */ await queryInterface.dropTable(
      "Airplanes"
    );
  },
};
