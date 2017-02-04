var Channel = require('../models/channel-schema');



module.exports = {
    find:find,
    findID:findID,
    create:create,
    update:update,
    remove:remove
}

function find(params, callback){
    Channel.find(params, function(err, channels){
        if (err){
            callback(err, null);
            return;
        }
        callback(null, channels);
    });
}

function findID(id, callback){
    Channel.findById(id, function(err, channel){
        if (err){
            callback(err, null);
            return;
        }
        callback(null, channel);
    });
}

function create(params, callback){
    Channel.create(params, function(err, channel){
        if (err){
            callback(err, null);
            return;
        }
        callback(null, channel);
    })
}

function update(id, params, callback){
    Channel.findByIdAndUpdate(id, params, {new:true}, function(err, channel){
        if (err){
            callback(err, null);
            return;
        }
        callback(null, channel);
    });
}

function remove(id, callback){
    Channel.findByIdAndRemove(id, params, function(){
        if (err){
            callback(err, null);
            return;
        }
        callback(null, null);
    });
}



//export default ChannelController;

// Try encapsulating this later
//
// function genericMongooseCallback(error, result, callback){
//     if (error){
//         callback(error, null);
//         return;
//     }
//     callback(null, result);
// }

