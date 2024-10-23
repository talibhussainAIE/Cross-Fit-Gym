const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const formRoutes = require("./routes/formRoutes");
const cors = require("cors");
const User = require("./models/User");

// Load environment variables
dotenv.config();

const app = express();

app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB (remove deprecated options)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
    // process.exit(1); // Exit process if connection fails
  });

// API routes
app.use("/api/form", formRoutes);

app.post("/register", async (req, res) => {
  try {
    const { name, email, message, age } = req.body;
    const user = await User.create({ name, email, message, age });
    res.json({
      user,
      message: `User Registered Successfully`,
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
});
app.get("/fetched", async (req, res) => {
  try {
    const users = await User.find();
    console.log('users',users)
    res.json({
      users,
      message: `User Fetched Successfully`,
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
});
app.post("/delete", async (req, res) => {
  try {
    const { id } = req.body;
    console.log('id',id)
    await User.findByIdAndDelete(id);
    res.json({
      message: `User Deleted Successfully`,
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
