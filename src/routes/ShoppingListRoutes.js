const express = require("express");
const {
  createShoppingList,
  deleteShoppingList,
  editShoppingListItems,
  getAllShoppingLists,
} = require("../controllers/ShoppingListContoller");
const router = express.Router();

router.post("/shopping-lists", createShoppingList);
router.delete("/shopping-lists/:id", deleteShoppingList);
router.put("/shopping-lists/:id/items", editShoppingListItems);
router.get("/shopping-lists", getAllShoppingLists);

module.exports = router;
