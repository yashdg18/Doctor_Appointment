const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");

// Load env vars
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// API Routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));
app.use("/api/v1/appointment", require("./routes/appointmentRoutes"));

// Serve frontend in production
if (process.env.NODE_MODE === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_MODE} mode on port ${PORT}`.bgCyan.white
  );
});
