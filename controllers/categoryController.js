const Category = require("../models/category");
const Item = require("../models/item");

const async = require("async");

exports.index = (req, res) => {
    // res.send("NOT IMPLEMENTED: Site Home Page");
    // Category.find().sort({ createdAt: -1 })
    //     .then(result => {
    //         res.render('index', { categories: result, title: 'All categories' });
    //     })
    //     .catch(err => {
    //         console.log(err);
    // });
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
exports.category_list = (req, res) => {
    res.send("NOT IMPLEMENTED: Category list");
};

// Display detail page for a specific category
exports.category_detail = (req, res) => {
    res.send(`NOT IMPLEMENTED: Category detail: ${req.params.id}`);
};

// Display Category CREATE form on GET
exports.category_create_get = (req, res) => {
    res.send("NOT IMPLEMENTED: Category create GET");
}

// Handle Category CREATE on POST
exports.category_create_post = (req, res) => {
    res.send("NOT IMPLEMENTED: Category create POST");
}

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