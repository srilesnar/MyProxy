/**
 * Created by srikuswaminathan on 10/12/15.
 */


var nconf = require('nconf');

nconf.use('file', { file: './configuration/config.json' });
nconf.load();

function getValue(key){
    return nconf.get(key);
}


exports.getValue = getValue;