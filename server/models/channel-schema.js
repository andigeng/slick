var mongoose = require('mongoose'); 


var ChannelSchema = new mongoose.Schema({
    name: {type:String, default:'New Channel'},
    user_ids: {type:String, default:'No one yet.'}, // change this later
    messages: {}
});


module.exports = mongoose.model('channelschema', ChannelSchema);