const express = require("express");

const { getBalance } = require("../controller/balanceController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/balance", protect, getBalance);

module.exports = router;
