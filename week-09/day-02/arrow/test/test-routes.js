'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('yondu endpoint', (t) => {
  request(app)
    .get('/yondu?distance=100.0&time=10.0')
    .expect('Content-Type', /json/)
    .expect(200)
    .expect({
      "distance": 100.0,
      "time": 10.0,
      "speed": 10.0
    })
    .end((err, res) => {
      t.error(err);     
      t.end();
    });
});

test('yondu endpoint with 0', (t) => {
  request(app)
    .get('/yondu?distance=100.0&time=0')
    .expect('Content-Type', /json/)
    .expect({
      "distance": 100.0,
      "time": 0,
      "speed": 0
    })
    .end((err, res) => {
      t.error(err);     
      t.end();
    });
});

test('yondu endpoint error', (t) => {
  request(app)
    .get('/yondu')
    .expect(400)
    .expect('Content-Type', /json/)
    .expect({
      "error": "Im a groot"
    })
    .end((err, res) => {
      t.error(err);     
      t.end();
    });
});