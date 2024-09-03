const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
const connectDB = require("./src/db.js");
const ShoppingListRouter = require("./src/routes/ShoppingListRoutes.js");
const NotificationRouter = require("./src/routes/NotificationRoutes.js");
connectDB();

// Define Routes
app.get("/", (req, res) => {
  res.send("Smart Cool Backend");
});

app.use("/api", ShoppingListRouter);
app.use("/api", NotificationRouter);

// Create Server
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
