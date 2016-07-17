var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

var ServiceCategorySchema = new Schema({
    title:String,
    decriptionBig: String,
    serviceId:String,
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
ServiceCategorySchema.pre('save', function(next) {
    next();
});

mongoose.model('ServiceCategory', ServiceCategorySchema);