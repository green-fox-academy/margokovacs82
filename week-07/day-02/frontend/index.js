const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
const bodyParser = require('body-parser');

//uses express 
app.use('/assets', express.static('assets'));

//understands get:
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

//understands post:
app.use(bodyParser.json());

//where is port:
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});


//GET: DOUBLING receives input in url with ? (query)
app.get('/doubling', (req, res) => {
  const input = req.query.input;
  console.log(input);
    if (input === undefined) {
      res.json({
        error: 'Please provide an input!'
      })
    } else {
        res.json ({
          "received": input,
          "result": input * 2, 
        })
    }
});


//GET: GREETER receives input in url with ? (query)
app.get('/greeter', (req, res) => {
  const name = req.query.name;
  const title = req.query.title;
  if (name === undefined) {
    res.json({
      error: 'Please provide a name!'
    })
  }
  else if (title === undefined) {  
    res.json({
      error: 'Please provide a title!'
    })
  } else {
    res.json ({
    //name=Petike&title=student
      "welcome_message": `Oh, hi there ${name}, my dear ${title}!`
    })
  }
});


//GET: APPEND A receives info from url with /:
app.get('/appenda/:appendable', (req, res) => {
  const appendable = req.params.appendable;
  console.log(appendable);
  if (appendable === undefined) {
    res.status(404);
    res.end();
  } else {
      res.json ({
        appended: appendable + 'a', 
      })
    }
});


//POST: DO UNTIL adds numbers or multiplies them until the given number, number is given in body:
app.post('/dountil/:thing', function(req, res) {
  const thing = req.params.thing;
  let numb = 1;
    if (thing === 'sum') {
      for (let i=2; i<req.body.until + 1; i++ ) {
        numb = numb + i;
      }
    } 
    if (thing === 'factor') {
      for (let i=2; i<req.body.until + 1; i++ ) {
        numb *= i;
      }
    } 
    res.json({
      "result": numb
    });
});


//POST: ARRAY HANDLER, array and 'what' is given in body:
app.post('/arrays/', function(req, res) {
  const what = req.body.what;
  if (what === undefined) {
    res.json({
      error: "Please provide what to do with the numbers!"
    })
  }
  else if (what === 'sum') {
    result = 0;
    for (let i=0; i<req.body.numbers.length; i++ ) {
      result += req.body.numbers[i];
    }
  } 
  else if (what === 'multiply') {
    result = 1;
    for (let i=0; i<req.body.numbers.length; i++ ) {
      result *= req.body.numbers[i];
    }
  } 
  else if (what === 'double') {
    result = []
    for (let i=0; i<req.body.numbers.length; i++ ) {
      result.push(req.body.numbers[i] * 2);
    }
  } 
  res.json({
    "result": result
  });
});

//The Reverser of the Sith
app.post('/yoda/', function(req, res) {
    const text = `${req.body.text} `;
    sentences = text.split('. ');
    let str = [];
   
    for (let i=0; i < sentences.length - 1; i++) {
        str.push(sentences[i].split(' '));
    }
    
    let newStr = [];
    for (let i=0; i < str.length; i++) {
      for (let j=0; j<str[i].length; j+=2) {
          if (str[i][j+1] !== undefined) {
            newStr.push(str[i][j+1]);
          }
          newStr.push(str[i][j]);
      }
		} 
		
    res.json({
        "result": newStr.join(' ')
    });
});
