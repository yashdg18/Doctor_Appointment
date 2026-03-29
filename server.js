const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(morgan("dev"));

// API Routes
app.use("/api/v1/user",        require("./routes/userRoutes"));
app.use("/api/v1/doctor",      require("./routes/doctorRoutes"));
app.use("/api/v1/appointment", require("./routes/appointmentRoutes"));

// ✅ Serve React frontend in production
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.bgCyan.white);
});
