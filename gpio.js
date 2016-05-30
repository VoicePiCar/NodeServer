'use strict';

var exec = require('child_process').execSync;
const path = '/sys/class/gpio/';

module.exports.open = open;
module.exports.close = close;
module.exports.write = write;

function open (pin, mode) {
    try { close(pin); } catch (e) {}
    exec('sudo echo ' + pin + ' > ' + path + 'export');
    exec('sudo echo ' + mode + ' > ' + path + 'gpio' + pin + '/direction');
}

function close (pin) {
    exec('sudo echo ' + pin + ' > ' + path + 'unexport');
}

function write (pin, val) {
    if (val)
        exec('sudo echo 1 > ' + path + 'gpio' + pin + '/value');
    else
        exec('sudo echo 0 > ' + path + 'gpio' + pin + '/value');
}
