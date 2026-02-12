const express = require("express");
const { createIncome, getIncomes } = require("../controller/incomeController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", protect, createIncome);
router.post("/", protect, getIncomes);

module.exports = router;
