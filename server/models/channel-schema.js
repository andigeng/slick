var mongoose = require('mongoose'); 


var ChannelSchema = new mongoose.Schema({
    name: {type:String, default:'New Channel'},
    user_ids: {type:String, default:'No one yet.'}, // change this later
    messages: {type:[{ type: mongoose.Schema.Types.ObjectId, ref: 'message'}]}
});


module.exports = mongoose.model('channelschema', ChannelSchema);