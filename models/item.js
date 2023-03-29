const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 50
    },
    description: {
        type: String,
        required: true,
        maxLength: 500
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    number_in_stock: {
        type: Number,
        required: true,
    }
})

// Virtual for item's URL
// Returns the absolute URL required to get a particular instance of the model
ItemSchema.virtual("url").get(function() {
    return `/inventory/item/${this._id}`;
})

module.exports = mongoose.model("Item", ItemSchema);