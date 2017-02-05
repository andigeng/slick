import superagent from 'superagent';



var get = (url, params, callback) => {
    superagent
        .get(url)
        .query(params)
        .set('Accept', 'application/json')
        .end((error, response) => {
            if (error){
                callback(error, null);
                return;
            }
            const status = response.body.status;
            if (status != 'success'){
                callback({message: response.body.message}, null);
                return;
            }
            callback(null, response.body);
        });
}

var post = (url, params, callback) => {
    superagent
        .post(url)
        .send(params)
        .set('Accept', 'application/json')
        .end((error, response) => {
            if (error){
                callback(error, null);
                return;
            }
            const status = response.body.status;
            if (status != 'success'){
                callback({message: response.body.message}, null);
                return;
            }
            callback(null, response.body);
        });
 }


var put = (url, params, callback) => {
    superagent
        .post(url)
        .query(params)
        .set('Accept', 'application/json')
        .end((error, response) => {
            if (error){
                callback(error, null);
                return;
            }
            const status = response.body.status;
            if (status != 'success'){
                callback({message: response.body.message}, null);
                return;
            }
            callback(null, response.body);
        });
}


export default {
    get:get,
    post:post,
    put:put,
};