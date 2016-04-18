var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('*', function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, function () {
  console.log('Server is running on port http://localhost:3000');
});
