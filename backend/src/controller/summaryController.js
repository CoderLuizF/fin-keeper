const Expense = require("../models/Expense");

const getSummary = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id });

    const total = expenses.reduce((acc, expense) => {
      return acc + expense.amount;
    }, 0);

    const byCategory = {};

    expenses.forEach((expense) => {
      if (!byCategory[expense.category]) {
        byCategory[expense.category] = 0;
      }

      byCategory[expense.category] += expense.amount;
    });

    res.json({
      total,
      byCategory,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getSummary };
