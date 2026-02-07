const express = require("express");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/users/profile", protect, (req, res) => {
  res.json({ message: "Acess granted", user: req.user });
});

module.exports = router;
