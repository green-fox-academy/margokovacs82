const express = require ('express');
const app = express();
const PORT = 3000;
let mysql = require('mysql');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(express.json());

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'x',
  database: 'planets',
  port: 3306,
});

app.get('/hello', (req, res) => {
  res.send('Hello world');
});

app.get('/', (req, res) => {
  connection.query('SELECT * FROM planet', function (error, results, fields) {
    connection.query('SELECT * FROM spaceship', function (error, moreresults, fields) {
      if (error) {
        res.sendStatus(500);
        return;
      }
      res.render('spaceship', {
        planet: results,
        spaceship: moreresults[0]     
      });
    });
  });
});


app.get('/planets', (req, res) => {
  connection.query('SELECT id, name, population FROM planet', function (error, results, fields) {
    if (error) {
      res.sendStatus(500);
      return;
    }
    res.json(results);
  });
});


app.get('/ship', (req, res) => {
  connection.query('SELECT id, planet, max_capacity, utilization FROM spaceship', function (error, results, fields) {
    if (error) {
      res.sendStatus(500);
      return;
    }
    res.json(results);
  });
});


app.post('/movehere/:id', function(req, res) {
  let planet = `SELECT name FROM planet WHERE id = ${req.params.id}`;
  let sql = "UPDATE spaceship SET planet = ? WHERE id = 1;";
  
  connection.query(planet, function(err, result) {
    if(err !== null) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    connection.query(sql, result[0].name, function(err, result) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      res.json(result);
    });
  });
});

app.post('/toship/:id', function(req, res) {
  let population = `SELECT population FROM planet WHERE id=${req.params.id};`;
  let util = `SELECT utilization FROM spaceship;`;

  connection.query(population, (err, result1) => {
    if (err) {
      return res.status(400).json('Wrong request');;
    } 
    connection.query(util, (err, result) => {
      if (err) {
        return res.status(400).json('Wrong request');
      } else {
        let freeSpaces = 60 - result[0].utilization;
        let onPlanet = result1[0].population;
        if (freeSpaces >= onPlanet) {
          freeSpaces -= onPlanet;
          onPlanet = 0;
        } else {
          onPlanet -= freeSpaces;
          freeSpaces = 0;
      
      connection.query(`UPDATE planet SET population = ${onPlanet} WHERE planet.id = ${req.params.id}`, (err) => {
        if(err) {
          return res.status(400).json('Wrong request');
        }
      });
      connection.query(`UPDATE spaceship SET utilization = ${60 - freeSpaces}`, (err) => {
        if (err) {
          return res.status(400).json('Wrong request');
        }
        });
      }
      res.json('OOHH YEAAAH');
    }
  });
});
});
  

app.post('/toplanet/:id', function(req, res) {

  let pop = `SELECT population FROM planet WHERE id=${req.params.id};`;
  let peopleOnShip = `SELECT utilization FROM spaceship WHERE id= 1;`;

  connection.query(pop, (err, result1) => {
    if (err) {
      return res.status(400).json('Wrong request');
    } 
    connection.query(peopleOnShip, (err, result) => {
      if (err) {
        return res.status(400).json('Wrong request');
      } 
      let newPop = result1[0].population;
      let utiliz = result[0].utilization;
      let newPlanet = newPop + utiliz;
      let emptyShip = 0;
      
      connection.query(`UPDATE planet SET population = ${newPlanet} WHERE planet.id = ${req.params.id}`, (err) => {
        if(err) {
          return res.status(400).json('Wrong request');
        }
      });
      connection.query(`UPDATE spaceship SET utilization = ${emptyShip}`, (err) => {
        if (err) {
          return res.status(400).json('Wrong request');
        }
      });
      res.json("message: from us with love"); 
    });
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
