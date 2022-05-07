import Sequelize from "sequelize";
import db from '../../../db';
import { User } from "../../users/entities/User";

const Product = db.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        allowNull: false,
        type: Sequelize.STRING,
    },
    description: {
        allowNull: false,
        type: Sequelize.STRING
    },
    price: {
        allowNull: false,
        type: Sequelize.FLOAT
    },
    userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
    }
})

export { Product }