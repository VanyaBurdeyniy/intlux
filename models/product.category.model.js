var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

var ProductCategorySchema = new Schema({
    title:String,
    decriptionBig: String,
    productId:String,
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
ProductCategorySchema.pre('save', function(next) {
    next();
});

mongoose.model('ProductCategory', ProductCategorySchema);