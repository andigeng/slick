var mongoose = require('mongoose'); 


var MessageSchema = new mongoose.Schema({
    name: {type:String, default:'Voldemort'},
    user_id: {type:String, default:''},
    body: {type:String, default:''},
    created_at: {type:Date, default:Date.now},
});


module.exports = mongoose.model('messageschema', MessageSchema);
