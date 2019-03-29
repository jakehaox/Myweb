
const express = require('express');

const app = express();

const port = 3000;
//app.use(express.static('public'))
app.use('/static',express.static('public'));

app.get('/',(req,res) => res.send('get responsse data...'))
app.post('/',(req,res) => res.send('post responsse data...'))
app.put('/',(req,res) => res.send('put responsse data...'))
app.delete('/',(req,res) => res.send('delete responsse data...'))

app.listen(port,() => console.log(`app listening on port ${port}! `))