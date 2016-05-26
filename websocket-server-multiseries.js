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
	var series1 = [];
	var series2 = [];
	var series3 = [];
	for (var i = 0; i < 3; i++) {
		series1.push({
			x: (++index),
			y: parseInt(Math.random() * (100 - 20) + 20)
		});
		series2.push({
			x: (++index),
			y: parseInt(Math.random() * (100 - 20) + 20)
		});
		series3.push({
			x: (++index),
			y: parseInt(Math.random() * (100 - 20) + 20)
		});
	}
	var data = [{key: "series1", values: series1}, {key: "series2", values: series2}, {key: "series3", values: series3}];
	io.emit('dataMessage', data);
}, 500);

http.listen(3000, function () {
	console.log('listening on *:3000');
});
