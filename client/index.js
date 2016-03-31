var rocklogster = function(opts) {
  console.log("rock logster starting")
  var oldlogs = console.log.bind(console);
  var requestify = require('requestify')

  console.log = function() {
    for (let value of arguments) {
      requestify.post('http://localhost:4444/', {data:value})
        .then(function(res){
          oldlogs.apply(console,[res.getBody()])
        })
    }
    oldlogs.apply(console, arguments)
  }
}

module.exports = rocklogster
