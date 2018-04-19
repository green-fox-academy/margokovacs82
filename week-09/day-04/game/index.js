const express = require('express');
const app = express();
let mysql = require('mysql');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express.static('static'));
//app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(express.json());

var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'x',
  database: 'quiz',
  port: 3306,
});

//app.get('/hello', (req, res) => {
  //res.send('Hello world');
//});

//render all
app.get('/game', (req, res) => {
  // conn.query('SELECT * FROM questions INNER JOIN answers ON questions.id = answers.question_id ;', function(err, result) {
  conn.query('SELECT * FROM questions;', function(err, questions) {
    if (err) {
      console.log(err.toString());
      res.satus(500).send('Database error');
      return;
    }

    const question = questions[Math.floor(Math.random() * (questions.length - 1)) + 1];

    conn.query(`SELECT * FROM answers WHERE answers.question_id = ${question.id};`, function(err, answers) {
      if (err) {
        console.log(err.toString());
        res.satus(500).send('Database error');
        return;
      }
      res.render( 'home', {
        question,
        answers,
      });
    });
  });
});

//just for postman
app.get('/all', (req, res) => {
  conn.query('SELECT * FROM questions', function (error, results, fields) {
    conn.query('SELECT * FROM answers', function (error, moreresults, fields) {
      if (error) {
        res.sendStatus(500);
        return;
      }
      res.json({results, 
        moreresults});
    });
  });
});

//get the questions
app.get('/questions', (req, res) => {
  conn.query('SELECT * FROM questions', function (error, results) {
    if (error) {
      res.sendStatus(500);
      return;
    }
    res.render('questions', {
      questions: results
    });
  });
});

//make a new record

app.post('/question', function (req, res) {
  const { question, answer_1, is_correct1, answer_2, is_correct2, answer_3, is_correct3, answer_4, is_correct4 } = req.body;

  if (parseInt(is_correct1) + parseInt(is_correct2) + parseInt(is_correct3) + parseInt(is_correct4) !== 1) {
    res.json({
      error: 'Please provide one correct answer!'
    })
    return;
  } else {
    conn.query(`INSERT INTO questions (question) VALUES ("${question}");`, function (err, question) {
      if (err) {
        res.sendStatus(500);
        return;
      }
      let questionID = question.id;
      conn.query(`INSERT INTO answers (question_id, answer, is_correct) VALUES
      (${questionID}, "${answer_1}", ${is_correct1}),
      (${questionID}, "${answer_2}", ${is_correct2}),
      (${questionID}, "${answer_3}", ${is_correct3}),
      (${questionID}, "${answer_4}", ${is_correct4});`, function (err, answer) {
          if (err) {
            res.sendStatus(500);
            return;
          }
        });
    });
  }
  res.sendStatus(200);
});


//delete a record
app.delete('/questions/:id', function(req, res) {

  let deleteQuery = `DELETE FROM questions, answers WHERE id, question_id = ${req.params.id};`;
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

module.exports = app;