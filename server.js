var Canvas = require('canvas');
var express = require('express');
var app = express();

app.get('/:z/:x/:y', function(req, res) {
	var body = generateTile(req.params.z, req.params.x, req.params.y);
	res.setHeader('Content-Type', 'image/png');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

app.listen(3000);
console.log('Listening on port 3000');

function generateTile(z, x, y) {
	var canvas = new Canvas(256, 256);
	var ctx = canvas.getContext('2d');

	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, 255, 255);

	ctx.lineWidth = 1;
	ctx.strokeRect(0.5, 0.5, 255, 255);

	ctx.fillStyle = 'black';
	ctx.fillText('z = ' + z, 100, 100);
	ctx.fillText('x = ' + x, 100, 120);
	ctx.fillText('y = ' + y, 100, 140);
	return canvas.toBuffer();
}
