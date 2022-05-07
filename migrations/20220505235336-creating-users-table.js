module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
          type: Sequelize.STRING,
      },
      email: {
          type: Sequelize.STRING
      },
      password: {
          type: Sequelize.STRING
      }
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable('users')
  }
}
