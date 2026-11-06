
const express = require("express");

const app = express();
const PORT = 3000;

// Home route
app.get("/", (req, res) => {
    res.send("Hello! My DevOps CI/CD application is running successfully.");
});

// Health check route
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        message: "Application is healthy"
    });
});

// Export the application for testing and server startup
module.exports = app;
