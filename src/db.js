const dbConfig = require("./config/config");

const Sequelize = require("sequelize");
const { DataTypes, Op } = Sequelize;
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   operatorsAliases: false,

//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle
//   },
// });
const sequelize = new Sequelize(
  "postgres://postgres:123456789@localhost:5050/sequelize-db"
);
sequelize.authenticate().then(()=>{
    console.log("connected")
}).catch(err=>{
    console.log('Error ' + err);
})

sequelize.sync({force: false}).then(()=>{
    console.log("Yes re-sync done")
})

module.exports = { sequelize };