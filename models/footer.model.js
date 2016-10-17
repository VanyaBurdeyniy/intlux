var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

var FooterSchema = new Schema({
    phone: String,
    email: String,
    skype: {
        name: String,
        address: String
    },
    created: {
        type: Date,
        default: Date.now
    }
});

// Hook a pre save method to hash the password
FooterSchema.pre('save', function(next) {
    next();
});

mongoose.model('Footer', FooterSchema);