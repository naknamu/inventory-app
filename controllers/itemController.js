const Item = require("../models/item");
const Category = require("../models/category");

const async = require("async");
const { body, validationResult } = require("express-validator");

// Display list of all items
exports.item_list = (req, res) => {
    // res.send("NOT IMPLEMENTED: Item list");
    Item.find({}, "name")
      .sort({name: 1})
      .exec(function (err, list_items) 
    {
      if (err) {
          return next(err);
      }
      //Successful, so render
      res.render('item_list', {
          title: "Item List",
          item_list: list_items
      })
    })
};

// Display detail page for a specific item
exports.item_detail = (req, res, next) => {
    // res.send(`NOT IMPLEMENTED: Item detail: ${req.params.id}`);
    Item.findById(req.params.id)
      .sort({name: 1})
      .populate("category")
      .exec(function (err, detail_items) 
    {
      if (err) {
          return next(err);
      }
      //Successful, so render
      res.render('item_detail', {
          title: "Item Details",
          item: detail_items
      })
    })
};

// Display item CREATE form on GET
exports.item_create_get = (req, res) => {
    // res.send("NOT IMPLEMENTED: Item create GET");
    // Get all categories, which will be used for adding item
    Category.find()
      .sort({name: 1})
      .exec(function(err, list_categories) {
        if (err) {
            return next(err);
        }
        // Successful, so render
        res.render("item_form", { 
            title: "Create Item",
            category_list: list_categories
        });
    })
}

// Handle item CREATE on POST
exports.item_create_post = [
    // Validate and sanitize the name field.
    body("name", "Item name must not be empty.").trim().isLength({ min: 1 }).escape(),
    body("description", "Item description must not be empty.").trim().isLength({ min: 1 }).escape(),
    body("category").escape(),
    body("price", "Item price must not be empty.").trim().isLength({ min: 1 }).escape(),
    body("number_in_stock", "Item number in stock must not be empty.").trim().isLength({ min: 1 }).escape(),

    // Process request after validation and sanitization
    (req, res, next) => {
        // Extract the validation errors from a request
        const errors = validationResult(req);

        //Create a category object with escaped and trimmed data
        const item = new Item({
            name: req.body.name, 
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            number_in_stock: req.body.number_in_stock,
        });

        // res.send(req.body.category);

        if (!errors.isEmpty()) {
            // There are errors. Render the form again with sanitized value/error messages
            Category.find()
              .sort({name: 1})
              .exec(function(err, list_categories) {
            if (err) {
                return next(err);
            }
            // rerender
            res.render("item_form", { 
                title: "Create Item",
                category_list: list_categories,
                item,
                errors: errors.array(),
                });
            })
            return;
        } 
        // Data from form is valid. Save item
        item.save((err) => {
            if (err) {
                return next(err);
            }
            // item saved. Redirect to item detail page
            res.redirect(item.url);
        })
    }
];

// Display item DELETE form on GET
exports.item_delete_get = (req, res) => {
    res.send("NOT IMPLEMENTED: Item DELETE GET");
}

// Handle item DELETE on POST
exports.item_delete_post = (req, res) => {
    res.send("NOT IMPLEMENTED: Item DELETE POST");
}

// Display item UPDATE form on GET
exports.item_update_get = (req, res) => {
    res.send("NOT IMPLEMENTED: Item UPDATE GET");
}

// Handle item UPDATE on POST
exports.item_update_post = (req, res) => {
    res.send("NOT IMPLEMENTED: Item UPDATE GET");
}