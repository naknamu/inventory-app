const Item = require("../models/item");


// Display list of all items
exports.item_list = (req, res) => {
    res.send("NOT IMPLEMENTED: Item list");
};

// Display detail page for a specific item
exports.item_detail = (req, res) => {
    res.send(`NOT IMPLEMENTED: Item detail: ${req.params.id}`);
};

// Display item CREATE form on GET
exports.item_create_get = (req, res) => {
    res.send("NOT IMPLEMENTED: Item create GET");
}

// Handle item CREATE on POST
exports.item_create_post = (req, res) => {
    res.send("NOT IMPLEMENTED: Item create POST");
}

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