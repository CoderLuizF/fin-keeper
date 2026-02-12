require("dotenv").config();

const express = require("express");
const connectDatabase = require("./config/database");
const healthRoutes = require("./routes/healthRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const summaryRoutes = require("./routes/sumarryRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const monthlySummaryRoutes = require("./routes/monthlySummaryRoutes");
const incomeRoutes = require("./routes/incomeRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

connectDatabase();

app.use("/api", healthRoutes);
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", expenseRoutes);
app.use("/api", summaryRoutes);
app.use("/api", categoryRoutes);
app.use("/api", monthlySummaryRoutes);
app.use("/api", incomeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
