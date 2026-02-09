const express = require("express");
const {
  createExpense,
  getExpenses,
  deleteExpense,
  updateExpense,
} = require("../controller/expenseController");

const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/expenses", protect, createExpense);
router.get("/expenses", protect, getExpenses);
router.delete("/expenses/:id", protect, deleteExpense);
router.put("/expenses/:id", protect, updateExpense);

module.exports = router;
