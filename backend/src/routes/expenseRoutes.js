const express = require("express");
const { createExpense } = require("../controller/expenseController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/expenses", protect, createExpense);

module.exports = router;
