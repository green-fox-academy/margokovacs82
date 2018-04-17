const express = require('express');
const app = express();

app.get('/yondu', (req, res) => {
  //distance=100.0&time=10.0"
  if (req.query.distance === undefined) {
    res.status(400);
    res.json({
      "error": "Im a groot"
    });  
  } else if (parseInt(req.query.time, 10) === 0) {
    res.json({
      "distance": req.query.distance,
      "time": req.query.time,
      "speed": 0
    });
  } 
  else {
    res.json({
      "distance": req.query.distance,
      "time": req.query.time,
      "speed": req.query.distance / req.query.time
    });
  } 
});

module.exports = app;