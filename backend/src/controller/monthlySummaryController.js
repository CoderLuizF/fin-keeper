const Expense = require("../models/Expense");

const getMonthlySummary = async (req, res) => {
  try {
    const year = Number(req.query.year);
    const month = Number(req.query.month);

    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0, 23, 59, 59);

    const expenses = await Expense.find({
      user: req.user.id,
      createdAt: {
        $gte: startDate,
        $lte: endDate,
      },
    });

    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);

    res.json({ year, month, total, expenses });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getMonthlySummary };
