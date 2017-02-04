var mongoose = require('mongoose'); 


var MessageSchema = new mongoose.Schema({
    user_id: {type:String, default:''},
    message: {type:String, default:''},
    timestamp: {type:Date, default:Date.now},
    channel_id: {type:String, default:''}
});


module.exports = mongoose.model('messageschema', MessageSchema);