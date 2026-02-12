const Expense = require("../models/Expense");
const Income = require("../models/Income");

const getBalance = async (req, res) => {
  try {
    const incomeResult = await Income.aggregate([
      {
        $match: { user: req.user._id },
      },
      {
        $group: {
          _id: null,
          totalIncome: { $sum: "$amount" },
        },
      },
    ]);

    const expenseResult = await Expense.aggregate([
      {
        $match: { user: req.user._id },
      },
      {
        $group: {
          _id: null,
          totalExpenses: { $sum: "$amount" },
        },
      },
    ]);

    const totalIncome = incomeResult[0]?.totalIncome || 0;
    const totalExpenses = expenseResult[0]?.totalExpenses || 0;

    const balance = totalIncome - totalExpenses;

    res.json({
      totalIncome,
      totalExpense,
      balance,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getBalance };
