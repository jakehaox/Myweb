

const http = require('http');
const fs = require('fs');
const host
const server = http.createServer((req,res)=>{
	console.log('url=>',req.url);
	const filePath = req.url;

       