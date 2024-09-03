const Notification = require("../models/NotificationModel.js");

// Create a new notification
exports.createNotification = async (req, res) => {
  const { productName, message } = req.body;

  if (!productName || !message) {
    return res
      .status(400)
      .json({ error: "Product name and message are required." });
  }

  try {
    const notification = new Notification({
      productName,
      message,
    });
    await notification.save();
    res.status(201).json(notification);
  } catch (error) {
    res.status(500).json({ error: "Failed to create notification." });
  }
};

// Get all notifications
exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find().sort({ createdAt: -1 });
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch notifications." });
  }
};

// Delete a notification by ID
exports.deleteNotification = async (req, res) => {
  const { id } = req.params;

  try {
    await Notification.findByIdAndDelete(id);
    res.json({ message: "Notification deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete notification." });
  }
};
