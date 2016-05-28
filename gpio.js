'use strict';

var exec = require('child_process').exec;
const path = '/sys/class/gpio/';

module.exports.open = open;
module.exports.close = close;
module.exports.write = write;


function open (pin, mode) {
    close(pin);
    exec('sudo echo ' + pin + ' > ' + path + 'export');
    exec('sudo echo ' + mode + ' > ' + path + '/gpio' + pin + '/direction');
}

function close (pin) {
    exec('sudo echo ' + pin + ' > ' + path + 'unexport');
}

function write (pin, val) {
    if (val)
        exec('echo 1 > ' + path + '/gpio' + pin + '/value');
    else
        exec('echo 0 > ' + path + '/gpio' + pin + '/value');
}