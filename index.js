require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static images correctly
app.use("/images", express.static(path.join(__dirname, "public/images")));

// Routes
app.use("/api/recipes", require("./routes/recipes"));

// Root route
app.get("/", (req, res) => {
  res.send("Foodify API is running!");
});

// Catch-All for Unknown Routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

