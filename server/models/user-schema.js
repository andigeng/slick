var mongoose = require('mongoose');


// recall that there is _id by mongo that will act as the unique identifier
var UserSchema = new mongoose.schema({
    name: {type:String, default:'John Doe'}
    // channels they are a part of
    // user picture
});


module.exports = mongoose.model('UserSchema', UserSchema);