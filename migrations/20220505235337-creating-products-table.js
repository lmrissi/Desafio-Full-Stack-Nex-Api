module.exports = {
    async up(queryInterface, Sequelize) {
      await queryInterface.createTable('products', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            allowNull: false,
            field: 'name',
            type: Sequelize.STRING,
        },
        description: {
            allowNull: false,
            field: 'description',
            type: Sequelize.STRING
        },
        price: {
            allowNull: false,
            field: 'price',
            type: Sequelize.FLOAT
        },
        user_id: {
          allowNull: false,
          field: 'user_id',
          references: { model: 'users', foreignKey: 'id' },
          type: Sequelize.INTEGER
        },
        createdAt :{
          type: Sequelize.DATE
        },
        updatedAt :{
          type: Sequelize.DATE
        }
      })
    },
  
    async down(queryInterface) {
      await queryInterface.dropTable('products')
    }
  }
  