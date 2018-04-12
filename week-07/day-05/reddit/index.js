const express = require ('express');
const app = express();
const PORT = 3000;
let mysql = require('mysql');
let moment = require('moment');

app.use(express.json());
//app.use('/static', express.static('static'));
//app.set('view engine', 'ejs');

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

//show a post
app.get('/posts', (req, res) => {
  connection.query('SELECT * FROM posts', function (error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

//make a new record
app.post('/posts', function(req, res) {
  timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
  title = req.body.title;
  url = req.body.url;
 
  connection.query("INSERT INTO posts (timestamp, title, url, score, owner) VALUES (?, ?, ?, ?, ?)", 
  [timestamp, title, url, 0, 'lali'],
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

//upvote and downvote
app.put('/posts/:id/upvote', function(req, res) {
  
  let upvote = `UPDATE posts SET score = score + 1 WHERE id = ${req.params.id};`;
  connection.query(upvote, (err, result) => {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log("1 record updated");
      res.json(result);
    }
  });
});

app.put('/posts/:id/downvote', function(req, res) {
  
  let downvote = `UPDATE posts SET score = score - 1 WHERE id = ${req.params.id};`;
  connection.query(downvote, (err, result) => {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log("1 record updated");
      res.json(result);
    }
  });
});

//modify a record - in progress
app.put('/posts/:id', function(req, res) {
  
    let modifications = `UPDATE posts SET title = '${req.body.title}', url = '${req.body.url}' WHERE id = ${req.params.id};`; 
    connection.query(modifications, (err, result) => {
      if(err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        console.log("1 record updated");
        res.json(result);
      }
    });
  });
  

//delete a record
app.delete('/posts/:id', function(req, res) {

  let deleteQuery = `DELETE FROM posts WHERE id = ${req.params.id};`;
  connection.query(deleteQuery, (err, result) => {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log("1 record deleted");
      res.json(result);
    }
  });
});



