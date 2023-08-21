'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUSERS: {
        allowNull: false,

        type: Sequelize.INTEGER,
        refrences:{
          modul:'Users',
          key:'id'
        }
      },
      title: {
        allowNull: false,

        type: Sequelize.STRING
        
      },
      content: {
        allowNull: false,

        type: Sequelize.STRING
      },
      attachement: {
        allowNull: false,

        type: Sequelize.STRING
      },
      likes: {
        allowNull: false,

        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,

        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,

        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Messages');
  }
};