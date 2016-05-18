var io = require('socket.io').listen(81);

console.log('server waiting ...');


io.on('connection', function (socket) {
  console.log('android device connected');
  socket.on('command', function (cmd) { 
	console.log('command: ' + cmd);
	socket.emit('correct connection', data);
  });
  socket.on('disconnect', function () {
	console.log('android device disconnected');
  });
});
