const express = require('express');
const app = express();

app.get('/groot', (req, res) => {

  if (req.query.message === undefined) {
   res.json({
    "error": "Im a groot"
    })
    res.sendStatus(500);
  } else {
    res.json({
      "received": req.query.message,
      "translated": "I am Groot!"
    })
  } 
});

module.exports = app;