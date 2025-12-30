const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/auth", authRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "backend running" });
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () =>
  console.log(`Backend running on http://localhost:${PORT}`)
);
