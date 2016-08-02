var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

var ServiceSchema = new Schema({
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
ServiceSchema.pre('save', function(next) {
    next();
});

mongoose.model('Service', ServiceSchema);