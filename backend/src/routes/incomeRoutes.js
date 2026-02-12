const express = require("express");
const { createIncome, getIncomes } = require("../controller/incomeController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/incomes", protect, createIncome);
router.post("/incomes", protect, getIncomes);

module.exports = router;
