const express = require("express");

const { getMonthlySummary } = require("../controller/monthlySummaryController");

const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/summary/monthly", protect, getMonthlySummary);

module.exports = router;
