var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

var DesignSchema = new Schema({
    class: String,
    created: {
        type: Date,
        default: Date.now
    }
});

// Hook a pre save method to hash the password
DesignSchema.pre('save', function(next) {
    next();
});

mongoose.model('Design', DesignSchema);