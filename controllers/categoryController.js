const Category = require("../models/category");

exports.index = (req, res) => {
    res.send("NOT IMPLEMENTED: Site Home Page");
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