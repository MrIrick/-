var path = require('path')
var http = requre('http')
var moment = require('moment')
http.createServer(function(req, res){
	console.log('hello world')
	res.send('<html><head><title>海平</title><head><body><h1>HelloWorld</h1></body></html>')
	res.end()
}).listen(8080, function(){
	console.log('server is starting')
	}
)
funcion test() {
	console.log('hello world')
}
console.log('is am right')
