const express = require("express");
const { getSummary } = require("../controller/summaryController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/summary", protect, getSummary);

module.exports = router;
