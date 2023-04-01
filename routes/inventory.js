const express = require("express");
const router = express.Router();

// Require controller modules
const category_controller = require("../controllers/categoryController");
const item_controller = require("../controllers/itemController");

/// CATEGORY ROUTES ///

// GET Inventory homepage
router.get("/", category_controller.index);

// GET Request for creating a Category
// NOTE: This must come before routes that display Category (uses id)
router.get("/category/create", category_controller.category_create_get);

// POST request for creating category
router.post("/category/create", category_controller.category_create_post);

// GET request to DELETE category
router.get("/category/:id/delete", category_controller.category_delete_get);

// POST request to DELETE category
router.post("/category/:id/delete", category_controller.category_delete_post);

// GET request to UPDATE category
router.get("/category/:id/update", category_controller.category_update_get);

// POST request to UPDATE category
router.post("/category/:id/update", category_controller.category_update_post);

// GET request for one Category
router.get("/category/:id", category_controller.category_detail);

// GET request for list of all Category
router.get("/categories", category_controller.category_list)


/// ITEM ROUTES ///

// GET Request for creating a ITEM
// NOTE: This must come before routes that display item (uses id)
router.get("/item/create", item_controller.item_create_get);

// POST request for creating item
router.post("/item/create", item_controller.item_create_post);

// GET request to DELETE item
router.get("/item/:id/delete", item_controller.item_delete_get);

// POST request to DELETE item
router.post("/item/:id/delete", item_controller.item_delete_post);

// GET request to UPDATE item
router.get("/item/:id/update", item_controller.item_update_get);

// POST request to UPDATE item
router.post("/item/:id/update", item_controller.item_update_post);

// GET request for one item
router.get("/item/:id", item_controller.item_detail);

// GET request for list of all item
router.get("/items", item_controller.item_list)

module.exports = router;