var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var index = 0;

io.on('connection', (socket) => {
	console.log('user connected');
});

io.on('end', (msg) => {
	console.log('closing websocket')
	process.exit();
});

setInterval(() => {
	var data = [];
	for (var i = 0; i < 3; i++) {
		data.push({
				x: parseInt(Math.random() * (100 - 0) + 0)
		});
	}
	io.emit('dataMessage', data);
}, 500);

http.listen(3000, function () {
	console.log('listening on *:3000');
});
