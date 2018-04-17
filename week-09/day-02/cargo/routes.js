const express = require('express');
const app = express();

app.get('/rocket', (req, res) => {
  //if (error) throw error;
    res.json({
      "caliber25": 0,
      "caliber30": 0,
      "caliber50": 0,
      "shipstatus": "empty",
      "ready": false
    });
  });

app.get('/rocket/fill', (req, res) => {
   //caliber=.50&amount=5000
   if (parseInt(req.query.amount) < 12500 && parseInt(req.query.amount) !== 0) {
      res.json({
          "received": req.query.caliber,
          "amount": req.query.amount,
          "shipstatus":  req.query.amount / 125 + "%",
          "ready": false
      });
    } else if (parseInt(req.query.amount) === 0) {
        res.json({
            "received": req.query.caliber,
            "amount": req.query.amount,
            "shipstatus":  "empty",
            "ready": false
        });
      } else if (parseInt(req.query.amount) === 12500) {
        res.json({
            "received": req.query.caliber,
            "amount": req.query.amount,
            "shipstatus":  "full",
            "ready": true,
            "message" : "You are ready to fly!"
        });
    } else {
      res.json({
        "received": req.query.caliber,
        "amount": req.query.amount,
        "shipstatus": "overloaded",
        "ready": true,
        
    });
    }
    });
  
module.exports = app;