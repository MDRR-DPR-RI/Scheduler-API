const dbPool = require("../config/mysql");

const getAllData = () => {
    const SQLQuery = "SELECT * FROM ruus";
    return dbPool.execute(SQLQuery);
};

module.exports = {
    getAllData,
};