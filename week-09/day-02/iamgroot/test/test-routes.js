'use strict';
const test = require('tape');
const request = require('supertest');
const app = require('../routes');
test('groot endpoint', (t) => {
  request(app)
    .get('/groot?message=kakafej')
    .expect('Content-Type', /json/)
    .expect({
      received:"kakafej",
      translated:"I am Groot!"
    })
    .end((err, res) => {
      t.error(err);     
      t.end();
    });
});