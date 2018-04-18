const express = require('express');
const app = express();
let mysql = require('mysql');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express.static('static'));
//app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(express.json());

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'x',
  database: 'calories',
  port: 3306,
});

app.get('/hello', (req, res) => {
  res.send('Hello world');
});

app.get('/foods', (req, res) => {
  connection.query('SELECT * FROM food', function (error, results, fields) {
    if (error) throw error;
    res.render('home', {
      food: results
    });
  });
});

//api
app.get('/foods/api', (req, res) => {
  connection.query('SELECT * FROM food', function (error, results, fields) {
    if (error) throw error;
    res.json(results)
    });
  });


//make a new record
app.post('/foods', function(req, res) {
  let food_name = req.body.food_name;
  let food_amount = req.body.food_amount;
  let calorie = req.body.calorie;

  if (isNaN(food_amount)) {
    res.status(401)
    res.json({
      message: "Please give a number for food amount!"
    })
  }

  let sql = "INSERT INTO food (food_name, food_amount, calorie) VALUES (?, ?, ?)";
  let queryInputs = [food_name, food_amount, calorie];
 
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

//delete a record
app.delete('/foods/:id', function(req, res) {

  let deleteQuery = `DELETE FROM food WHERE idfood = ${req.params.id};`;
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