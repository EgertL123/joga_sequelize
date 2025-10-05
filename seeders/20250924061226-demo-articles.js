'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
        queryInterface.bulkInsert('Articles', [{
          name: 'Introduction to Ashtanga',
          slug: 'introduction-to-ashtanga',
          image: 'ashtanga.jpg',
          body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, ut, voluptatibus. Aliquid aspernatur blanditiis eos fuga iste itaque molestias pariatur reiciendis rem sed. Laborum nisi nostrum recusandae reprehenderit similique sunt?</p>',
          published: '2020-01-08 15:02:30',
            author_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }]),
        queryInterface.bulkInsert('Articles', [{
          name: 'Morning vinyasa flow routine',
          slug: 'morning-vinyasa-flow-routine',
          image: 'morning.jpg',
          body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum dignissimos dolore ea eaque ipsum neque quis quod. Ad aliquid doloremque eaque facere, incidunt laboriosam magnam numquam pariatur quibusdam quo!</p>',
          published: '2020-04-14 15:02:41',
            author_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }]),
        queryInterface.bulkInsert('Articles', [{
          name: 'Secrets of a yoga teacher',
          slug: 'secrets-of-a-yoga-teacher',
          image: 'yoga-teacher.jpg',
          body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequatur cumque delectus est eveniet excepturi facere fugit ipsum minima nam nemo numquam pariatur quae quasi quis sapiente similique sunt veritatis?</p>',
          published: '2060-05-14 15:02:55',
            author_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }])
    ])
  },

  async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Articles', null, {});
  }
};
