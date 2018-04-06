const express = require ('express');
const app = express();
const PORT = 3000;
let mysql = require('mysql');
let moment = require('moment');

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//app.get('/hello', (req, res) => {
  //res.send('Hello world');
//});

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'x',
  database: 'reddit',
});

app.get('/posts', (req, res) => {
  connection.query('SELECT * FROM posts', function (error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

app.post('/posts', function(req, res){
  timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
  title = req.body.title;
  url = req.body.url;
 
  connection.query("INSERT INTO posts (timestamp, title, url, score, owner) VALUES (?, ?, ?, ?, ?)", 
  [timestamp, title, url, 0, 'sanyi'],
  function(err, result){
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log("1 record inserted");
      res.json(result);
    }
  });
});

