var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

var NewsSchema = new Schema({
    content: String,
    description: String,
    title: String,
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
NewsSchema.pre('save', function(next) {
    next();
});

mongoose.model('News', NewsSchema);