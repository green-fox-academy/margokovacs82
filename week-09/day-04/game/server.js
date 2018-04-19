'use strict';

const express = require ('express');
const app = express();
const PORT = 8080;
const routes = require('./index');

routes.listen(PORT, () => {
  console.log('Server running on port 8080');
});
