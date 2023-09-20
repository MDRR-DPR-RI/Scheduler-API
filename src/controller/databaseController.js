const DatabaseModel = require("../models/Database");

const getAllData = async (req, res) => {
    try {
        const [data] = await DatabaseModel.getAllData(); // excecute query
        console.log("get all data")
        res.json({
            message: "GET all RUU data",
            data
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }
};


module.exports = {
    getAllData
};
