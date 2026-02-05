require("dotenv").config();

const express = require("express");
const connectDatabase = require("./config/database");
const healthRoutes = require("./routes/healthRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

connectDatabase();

app.use(express.json());
app.use(healthRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
