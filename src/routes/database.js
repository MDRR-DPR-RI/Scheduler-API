// Import dependencies
const express = require("express");

// Import controller functions
const {
    getAllData,
} = require("../controller/databaseController");

const router = express.Router();

// Get all data in DB - GET
router.get("/", getAllData);

module.exports = router;
