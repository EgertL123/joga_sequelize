'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Tags', [
          {
              name: 'yogapractice',
              createdAt: new Date(),
              updatedAt: new Date()
          }], {});
      await queryInterface.bulkInsert('Tags', [
          {
              name: 'yogainspiration',
              createdAt: new Date(),
              updatedAt: new Date()
          }], {});
      await queryInterface.bulkInsert('Tags', [
          {
              name: 'wellness',
              createdAt: new Date(),
              updatedAt: new Date()
          }], {});
      await queryInterface.bulkInsert('Tags', [
          {
              name: 'nature',
              createdAt: new Date(),
              updatedAt: new Date()
          }], {});
      await queryInterface.bulkInsert('Tags', [
          {
              name: 'spirituality',
              createdAt: new Date(),
              updatedAt: new Date()
          }], {});
      await queryInterface.bulkInsert('Tags', [
          {
              name: 'sport',
              createdAt: new Date(),
              updatedAt: new Date()
          }], {});
      await queryInterface.bulkInsert('Tags', [
          {
              name: 'yogateacher',
              createdAt: new Date(),
              updatedAt: new Date()
          }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
