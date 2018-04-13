const express = require ('express');
const app = express();
const PORT = 3000;
let mysql = require('mysql');
let moment = require('moment');;
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(express.json());

//app.get('/hello', (req, res) => {
  //res.send('Hello world');
//});

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'x',
  database: 'reddit',
  port: 3306,
});

//show a post with postman
app.get('/api/posts', (req, res) => {
  connection.query('SELECT * FROM posts', function (error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

//show a post at localhost with ejs
app.get('/posts', (req, res) => {
  connection.query('SELECT * FROM posts', function (error, results, fields) {
    if (error) throw error;
    res.render('dash', {
      posts: results,
      moment,
    });
  });
});

//make a new record
app.post('/posts', function(req, res) {

  timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
  title = req.body.title;
  url = req.body.url;
  score = req.body.score;
  owner = req.body.owner;
  let sql = "INSERT INTO posts (timestamp, title, url, score, owner) VALUES (?, ?, ?, ?, ?)";
  let queryInputs = [timestamp, title, url, 0, owner];
 
  connection.query(sql, queryInputs, function(err, result){
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json({
        message: 'hurray!',
      });
    }
  });
});

//upvote and downvote
app.patch('/posts/:id/upvote', function(req, res) {

  let upvote = `UPDATE posts SET score = score + 1 WHERE id = ${req.body.id};`;
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

app.patch('/posts/:id/downvote', function(req, res) {
  
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

//modify a record:
app.put('/posts/:id', function(req, res) {
  
  let newowner = req.body.owner;
  let newtitle = req.body.title;
  let newurl = req.body.url;
  let sql = "UPDATE posts SET title = ?, url = ?, owner = ? WHERE id = ?;";
  let queryInputs = [newtitle, newurl, newowner, req.params.id];
  
    connection.query(sql, queryInputs, function (err, result) {
      if(err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.json({
          message: "1 record updated",
        });
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

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
