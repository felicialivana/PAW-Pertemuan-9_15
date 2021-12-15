//MENGKONEKSIKAN DATABASE DENGAN NODEJS
const sequelize = require ("sequelize")


const db = new sequelize ("pengembangan_web", "root", "", {
    dialect: "mysql"
});

db.sync({});

module.exports = db;