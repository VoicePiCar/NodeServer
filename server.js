'use strict';

var gpio = require('./gpio');
var io = require('socket.io').listen(81);

// pin numbers
const leftMotor  = 17;
const rightMotor = 27;

function output (left, right) {
    if (left)
        gpio.write(leftMotor, 1);
    else
        gpio.write(leftMotor, 0);
    if (right)
        gpio.write(rightMotor, 1);
    else
        gpio.write(rightMotor, 0);
}

console.log('server waiting ...');
io.on('connection', function (socket) {
	
    console.log('android device connected');
    socket.on('command', function (cmd) {
        gpio.open(leftMotor, "output");
        gpio.open(rightMotor, "output");
        console.log('command: ' + cmd);
        switch (cmd) {
            case 'go':
                output(true, true);
                break;
            case 'stop':
                output(false, false);
                break;
            case 'left':
                output(true, false);
                break;
            case 'right':
                output(false, true);
                break;
        }
    });

    socket.on('disconnect', function () {
        console.log('android device disconnected');
        gpio.close(leftMotor);
        gpio.close(rightMotor);
    });
});
