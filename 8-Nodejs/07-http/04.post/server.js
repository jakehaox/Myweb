

const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req,res)=>{
	
	console.log('url=>',req.url,'method=>',req.method);

	let body = '';
	req.on('data',(chunk)=>{
		body += chunk;
	})

	req.on('end',()=>{
		// console.log(body);
		let obj = querystring.parse(body);
		console.log(obj);
	})

	res.setHeader('Content-Type',"text/html;charset=utf-8");
	res.end('kuazhu');
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})      