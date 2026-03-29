const express   = require("express");
const colors    = require("colors");
const morgan    = require("morgan");
const dotenv    = require("dotenv");
const path      = require("path");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(morgan("dev"));

// ── API Routes ──────────────────────────────
app.use("/api/v1/user",        require("./routes/userRoutes"));
app.use("/api/v1/doctor",      require("./routes/doctorRoutes"));
app.use("/api/v1/appointment", require("./routes/appointmentRoutes"));

// ── Serve React Frontend ────────────────────
const buildPath = path.join(__dirname, "client", "build");
app.use(express.static(buildPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

// ── Start Server ────────────────────────────
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.bgCyan.white);
});
```

---

## Step 3 — Add `.gitignore` in Root

Make sure `client/build` is **NOT** in gitignore. Open `.gitignore` and check — remove this line if it exists:
```
# Remove this line if present:
client/build
