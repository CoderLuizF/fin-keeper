const Category = require("../models/Category");

const createCategory = async (req, res) => {
  try {
    const category = await Category.create({
      name: req.body.name,
      user: req.user.id,
    });

    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getCategories = async (req, res) => {
  const categories = await Category.find({
    user: req.user.id,
  });

  res.json(categories);
};

module.exports = { createCategory, getCategories };
