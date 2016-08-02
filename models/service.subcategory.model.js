var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

var ServiceSubCategorySchema = new Schema({
    title:String,
    decriptionBig: String,
    subServiceId: String,
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
ServiceSubCategorySchema.pre('save', function(next) {
    next();
});

mongoose.model('ServiceSubCategory', ServiceSubCategorySchema);