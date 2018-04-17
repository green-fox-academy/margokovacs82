'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('rocket endpoint', (t) => {
  request(app)
    .get('/rocket/fill?caliber=.50&amount=0')
    .expect('Content-Type', /json/)
    .expect(200)
    .expect({
       "received": '.50', "amount": '0', "shipstatus": "empty", "ready": false 
    })
    .end((err, res) => {
      t.error(err);     
      t.end();
    });
});

test('rocket endpoint 40%', (t) => {
  request(app)
    .get('/rocket/fill?caliber=.50&amount=5000')
    .expect('Content-Type', /json/)
    .expect(200)
    .expect({
       "received": '.50', "amount": '5000', "shipstatus": "40%", "ready": false 
    })
    .end((err, res) => {
      t.error(err);     
      t.end();
    });
});

test('rocket endpoint 100%', (t) => {
  request(app)
    .get('/rocket/fill?caliber=.50&amount=12500')
    .expect('Content-Type', /json/)
    .expect(200)
    .expect({
       "received": '.50', "amount": '12500', "shipstatus": "full", "ready": true, "message" : "You are ready to fly!" 
    })
    .end((err, res) => {
      t.error(err);     
      t.end();
    });
});

test('rocket endpoint 100%', (t) => {
  request(app)
    .get('/rocket/fill?caliber=.50&amount=13000')
    .expect('Content-Type', /json/)
    .expect(200)
    .expect({
       "received": '.50', "amount": '13000', "shipstatus": "overloaded", "ready": true
    })
    .end((err, res) => {
      t.error(err);     
      t.end();
    });
});