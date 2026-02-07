const express = require("express");
const {
  createExpense,
  getExpenses,
} = require("../controller/expenseController");

const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/expenses", protect, createExpense);
router.get("/expenses", protect, getExpenses);

module.exports = router;
