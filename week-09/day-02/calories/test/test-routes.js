'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');


test('post foods endpoint', (t) => {
  request(app)
    .post('/foods')
    .expect('Content-Type', "text/plain; charset=utf-8")
    .expect(200)
    .expect({
      "message":"hurray!"
    })
    .end((err, res) => {
      t.error(err);     
      t.end();
    });
});

test('delete food', (t) => {
  request(app)
    .delete('/foods/:id')
    .expect('Content-Type', "text/plain; charset=utf-8")
    .expect(200)
    .expect({
      message: "1 record deleted"
    })
    .end((err, res) => {
      t.error(err);     
      t.end();
    });
});


/*
test('get foods endpoint', (t) => {
  request(app)
    .get('/foods')
    .expect('Content-Type', 'text/plain; charset=utf-8')
    .expect(200)
    .expect({
       "received": '.50', "amount": '0', "shipstatus": "empty", "ready": false 
    })
    .end((err, res) => {
      t.error(err);     
      t.end();
    });
});
*/