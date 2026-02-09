const express = require("express");
const {
  createExpense,
  getExpenses,
  deleteExpense,
  updateExpense,
} = require("../controller/expenseController");

const { expenseValidation } = require("../validators/expenseValidator");
const { validationResult } = require("express-validator");

const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post(
  "/expenses",
  protect,
  expenseValidation,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  },
  createExpense,
);
router.get("/expenses", protect, getExpenses);
router.delete("/expenses/:id", protect, deleteExpense);
router.put("/expenses/:id", protect, updateExpense);

module.exports = router;
