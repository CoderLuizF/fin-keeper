require("dotenv").config();

const express = require("express");
const connectDatabase = require("./config/database");
const healthRoutes = require("./routes/healthRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

connectDatabase();

app.use(healthRoutes);
app.use(authRoutes);
app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
