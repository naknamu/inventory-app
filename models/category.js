const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
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
})

// Virtual for category's URL
// Returns the absolute URL required to get a particular instance of the model
CategorySchema.virtual("url").get(function() {
    return `/inventory/category/${this._id}`;
})

module.exports = mongoose.model("Category", CategorySchema);