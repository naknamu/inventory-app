const Item = require("../models/item");
const Category = require("../models/category");

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