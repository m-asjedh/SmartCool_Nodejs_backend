const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/NotificationController");

// Route to create a new notification
router.post("/notifications", notificationController.createNotification);

// Route to get all notifications
router.get("/notifications", notificationController.getNotifications);

// Route to delete a notification by ID
router.delete("/notifications/:id", notificationController.deleteNotification);

module.exports = router;
