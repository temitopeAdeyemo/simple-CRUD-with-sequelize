module.exports = {
    HOST:"localhost",
    USER:"postgres",
    PASSWORD:"123456789",
    DB:"sequelize-db",
    dialect:"postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 300000,
        idle: 10000
    }
}
