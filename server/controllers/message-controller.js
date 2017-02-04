var Comment = require('../models/message-schema');


module.exports = {
    find:   find,
    findID: findID,
    create: create,
    update: update,
    remove: remove
}


function find(params, callback){
    Channel.find(params, function(err, messages){
        if (err){
            callback(err, null);
            return;
        }
        callback(null, messages);
    });
}

function findID(id, callback){
    Channel.findById(id, function(err, message){
        if (err){
            callback(err, null);
            return;
        }
        callback(null, message);
    });
}

function create(params, callback){
    Channel.create(params, function(err, message){
        if (err){
            callback(err, null);
            return;
        }
        callback(null, message);
    })
}

function update(id, params, callback){
    Channel.findByIdAndUpdate(id, params, {new:true}, function(err, message){
        if (err){
            callback(err, null);
            return;
        }
        callback(null, message);
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


// Try encapsulating this later
//
// function genericMongooseCallback(error, result, callback){
//     if (error){
//         callback(error, null);
//         return;
//     }
//     callback(null, result);
// }
