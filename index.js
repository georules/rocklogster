var express = require('express');
var app = express();

app.use(require('body-parser').json());
app.use(require('cors')())

app.post('/', function(req,res){
  console.log(req.body)
  res.send('ok');
})

app.listen(4444)
