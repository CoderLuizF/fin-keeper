const express = require("express");

const {
  createCategory,
  getCategories,
} = require("../controller/categoryController");

const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/categories", protect, createCategory);
router.get("/categories", protect, getCategories);

module.exports = router;
