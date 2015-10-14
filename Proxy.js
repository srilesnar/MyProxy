/**
 * Created by srikuswaminathan on 10/13/15.
 */


var config = require('./configHelper');
var cache = require('cache-module');

var cacheDuration = "cache_config:cacheDuration";
var cacheSizeBytes = "cache_config:cacheSizeBytes";
var cacheSizeElements = "cache_config:cacheSizeElements";

function forwardRequest(request){
    if(request.method === "GET"){
        cache.cacheIns.initCache(config.getValue(cacheDuration), config.getValue(cacheSizeBytes), config.getValue(cacheSizeElements));
        var data = cache.cacheIns.handleRequest(request);
        return data;
    } else {
        return "POST not supported";
    }
}

exports.forwardRequest = forwardRequest;