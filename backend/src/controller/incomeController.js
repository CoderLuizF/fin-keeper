const Income = require("../models/Income");

const createIncome = async (req, res) => {
  try {
    const { description, amount, category, date } = req.body;

    if (!description || !amount || !category) {
      res.status(400).json({ message: "All fields are required" });
    }

    const income = await Income.create({
      description,
      amount,
      category,
      date,
      user: req.user.id,
    });

    res.status(201).json(income);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getIncomes = async (req, res) => {
  try {
    const incomes = await Income.find({ user: req.user.id }).sort({ date: -1 });

    res.json(incomes);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createIncome, getIncomes };
