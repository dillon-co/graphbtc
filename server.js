const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/.well-known/acme-challenge/FPI4407c83aABJyU6CO_0Xbld-A-PZKByMWV8YlWzYw', function(req, res){
  res.send('FPI4407c83aABJyU6CO_0Xbld-A-PZKByMWV8YlWzYw.hGVjMPvN8BFNcVg-AVgGcknQYXZzI7rTE5Q_q5EXw4U');
});
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/index.html'));
});


app.listen(process.env.PORT || 8080);
