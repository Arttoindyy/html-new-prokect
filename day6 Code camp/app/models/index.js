const config = require = require("../config/db");

const Datatype = require ("sequelize");
const sequelize = new Datatype (
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        pool:{
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }

);

const db = {};
db.Datatype = Datatype;
db.sequelize = sequelize;

db.employee = require("../models/employee.model")(sequelize, Datatype);
db.setting = require("../models/setting.model")(sequelize, Datatype);

//ONE to ONE
db.employee.hasOne(db.setting, {
    onDalete: 'CASCADE'
});
db.setting.belongTo(db.employee);

module.exports = db;