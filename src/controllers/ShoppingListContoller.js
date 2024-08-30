const ShoppingList = require("../models/ShoppingListModel.js");

// Create a new shopping list with items
const createShoppingList = async (req, res) => {
  try {
    const { name, items } = req.body;

    if (!name || !items || !Array.isArray(items)) {
      return res.status(400).json({ error: "Invalid data" });
    }

    const newShoppingList = new ShoppingList({ name, items });
    await newShoppingList.save();

    res.status(201).json(newShoppingList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a shopping list by ID
const deleteShoppingList = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedList = await ShoppingList.findByIdAndDelete(id);

    if (!deletedList) {
      return res.status(404).json({ error: "Shopping list not found" });
    }

    res.status(200).json({ message: "Shopping list deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Edit items in a shopping list
const editShoppingListItems = async (req, res) => {
  try {
    const { id } = req.params;
    const { items } = req.body;

    if (!items || !Array.isArray(items)) {
      return res.status(400).json({ error: "Invalid data" });
    }

    const updatedList = await ShoppingList.findByIdAndUpdate(
      id,
      { items },
      { new: true }
    );

    if (!updatedList) {
      return res.status(404).json({ error: "Shopping list not found" });
    }

    res.status(200).json(updatedList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all shopping lists
const getAllShoppingLists = async (req, res) => {
  try {
    const shoppingLists = await ShoppingList.find();
    res.status(200).json(shoppingLists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createShoppingList,
  deleteShoppingList,
  editShoppingListItems,
  getAllShoppingLists,
};
