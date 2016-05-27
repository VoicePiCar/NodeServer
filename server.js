var io = require('socket.io').listen(81);
var fs = require("fs");
var path = "output.txt";

console.log('server waiting ...');

io.on('connection', function (socket) {
	
  console.log('android device connected');
  socket.on('command', function (cmd) { 
	console.log('command: ');
	cmd += '\n';	
	fs.appendFile(path, cmd, function(error) {
		 if (error) {
		   console.error("write error:  " + error.message);
		 } else {
		   console.log("Successful Write to " + path);
		 }
	});
  });
  
  socket.on('disconnect', function () {
	console.log('android device disconnected');
  });
  
});
