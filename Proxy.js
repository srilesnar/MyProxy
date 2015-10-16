/**
 * Created by srikuswaminathan on 10/13/15.
 */


var config = require('./configHelper');
var cache = require('cache-module');

function forwardRequest(request, expiry, bytesSize, elemSize, callback){
    if(request.method === "GET"){
        cache.cacheIns.getInstance(expiry, bytesSize, elemSize).handleRequest(request, callback);
    } else {
        return "POST not supported";
    }
}

exports.forwardRequest = forwardRequest;