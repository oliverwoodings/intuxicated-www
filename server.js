var createServer = require('http-server/lib/http-server').createServer
var path = require('path')

var server = createServer({
  root: path.resolve(__dirname, 'dist'),
  showDir: false,
  autoIndex: true
})

server.listen(1234, '0.0.0.0', function () {
  console.log('Server started')
})
