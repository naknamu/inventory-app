const Category = require("../models/category");
const Item = require("../models/item");

const async = require("async");
const { body, validationResult } = require("express-validator");

exports.index = (req, res) => {
    // res.send("NOT IMPLEMENTED: Site Home Page");
    async.parallel(
      {
        category_count(callback) {
            Category.countDocuments({}, callback);
        },
        item_count(callback) {
            Item.countDocuments({}, callback);
        }
      },
      (err, results) => {
        res.render("index", {
            title: 'Dynamic Inventory',
            error: err,
            data: results,
        })
      }
    )
};

// Display list of all categories
exports.category_list = (req, res, next) => {
    // res.send("NOT IMPLEMENTED: Category list");
    Category.find()
      .sort({name: 1})
      .exec(function (err, list_categories) {
        if (err) {
            return next(err);
        }
        //Successful, so render
        res.render('category_list', {
            title: "Category List",
            category_list: list_categories
        })
      })
};

// Display detail page for a specific category
exports.category_detail = (req, res, next) => {
    // res.send(`NOT IMPLEMENTED: Category detail: ${req.params.id}`);
    async.parallel({
        category(callback) {
            Category.findById(req.params.id).exec(callback);
        },

        category_items(callback) {
            Item.find({category: req.params.id}).exec(callback);
        }
    },
    (err, results) => {
        if (err) {
            return next(err);
        }
        if (results.category == null) {
            //No results
            const err = new Error("Category not found");
            err.status = 404;
            return next(err);
        }
        //Successful, so render
        res.render('category_detail', {
            title: "Category detail",
            category: results.category,
            category_items: results.category_items
        })
    }
    )
};

// Display Category CREATE form on GET
exports.category_create_get = (req, res) => {
    // res.send("NOT IMPLEMENTED: Category create GET");
    res.render("category_form", { title: "Create Category"});
};

// Handle Category CREATE on POST
exports.category_create_post = [
    // Validate and sanitize the name field.
    body("name", "Category name required").trim().isLength({ min: 1 }).escape(),
    body("description", "Category description required").trim().isLength({ min: 1 }).escape(),

    // Process request after validation and sanitization
    (req, res, next) => {
        // Extract the validation errors from a request
        const errors = validationResult(req);

        //Create a category object with escaped and trimmed data
        const category = new Category({name: req.body.name, description: req.body.description});

        if (!errors.isEmpty()) {
            // There are errors. Render the form again with sanitized value/error messages
            res.render("category_form", {
                title: "Create Category",
                category,
                errors: errors.array(),
            })
            return;
        } else {
            // Data from form is valid
            // Check if Category with same name already exist
            Category.findOne({name: req.body.name}).exec((err, found_category) => {
                if (err) {
                    return next(err);
                }

                if (found_category) {
                    // Category exists, redirect to its detail page
                    res.redirect(found_category.url);
                } else {
                    category.save((err) => {
                        if (err) {
                            return next(err);
                        }
                        // Category saved. Redirect to category detail page
                        res.redirect(category.url);
                    })
                }
            })
        }
    }
];


// Display Category DELETE form on GET
exports.category_delete_get = (req, res) => {
    res.send("NOT IMPLEMENTED: Category DELETE GET");
}

// Handle Category DELETE on POST
exports.category_delete_post = (req, res) => {
    res.send("NOT IMPLEMENTED: Category DELETE POST");
}

// Display Category UPDATE form on GET
exports.category_update_get = (req, res) => {
    res.send("NOT IMPLEMENTED: Category UPDATE GET");
}

// Handle Category UPDATE on POST
exports.category_update_post = (req, res) => {
    res.send("NOT IMPLEMENTED: Category UPDATE GET");
}