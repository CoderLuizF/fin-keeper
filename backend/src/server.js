const express = require("express");

const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "API is running" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
