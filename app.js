const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const connectDB = require("./config/db");
require("dotenv").config();

// Import Routes
const homeRoutes = require("./routes/homeRoutes");
const imageRoutes = require("./routes/imageRoutes");

const app = express();

// Database connection
connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser()); // Use cookie-parser to parse cookies

// Set security headers
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;"
  );
  next();
});

// API Routes - these need to come BEFORE the wildcard route
app.use("/api/home", homeRoutes);
app.use("/api/images", imageRoutes);

// Serve frontend for all other routes - this should come AFTER API routes
app.use(express.static(path.join(__dirname, "views/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "views/build/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
