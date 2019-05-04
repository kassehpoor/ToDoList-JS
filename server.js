const http = require('http');
 
const ecstatic = require('ecstatic')({
  root: `${__dirname}`,
  showDir: true,
  autoIndex: true,
});
 
http.createServer(ecstatic).listen(8080);
 
console.log('Listening on :8080');

/*
//-------------http-----------------------------------------------
const http = require('http');
const server = http.createServer((request, response) => {
    console.log(request.url);
    response.end('Hello from Saleh khafan...');
  });
server.listen(4444, (err) => {
  if (err) {
    return console.error('something bad happened', err);
  }
  console.log(`server is listening on 4444`);
});
*/
/*
//---------------file system----------------------------------------------
	//static file server using file system module
	//common use for the file system module:
	//-read files
	//-create files
	//-update files
	//-delete files
	//-rename files
	var http = require('http');
	var fs = require('fs');
	
	http.createServer(function (req,res){
		fs.readFile('_index.html',function (err,data){
			res.writeHead(200,{'Content-Type':'text/html'});
			res.write(data);
			res.end();
		});
	}).listen(7070);
*/

/*
	var http =require('http');
	var dt =require('./myfirstmodule');
	http.createServer().listen(4444);
*/