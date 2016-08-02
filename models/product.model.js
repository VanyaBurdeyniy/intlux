var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
    title:String,
    decriptionBig: String,
    hasCategory: Boolean,
    img: {
        name:String,
        path:String,
        base64:String
    },
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