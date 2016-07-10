var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
    decriptionSmall: String,
    decriptionBig: String,
    img: String,
    categories: [
        {subCategories: Array}
    ],
    created: {
        type: Date,
        default: Date.now
    }
});

// Hook a pre save method to hash the password
ProductSchema.pre('save', function(next) {
    next();
});

mongoose.model('Product', ProductSchema);