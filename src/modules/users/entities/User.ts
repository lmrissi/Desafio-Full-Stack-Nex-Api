import Sequelize from "sequelize";
import db from '../../../db';
import { Product } from "../../products/entities/Product";

const User = db.define('users', {
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

User.hasMany(Product)

export { User }