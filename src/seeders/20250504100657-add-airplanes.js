"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "airplanes",
      [
        {
          modelNumber: "airbus380",
          capacity: 380,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "airbus340",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "boeing780",
          capacity: 700,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "rafale",
          capacity: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("airplanes", {});
  },
};
