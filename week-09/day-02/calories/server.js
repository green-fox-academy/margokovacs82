'use strict';

const express = require ('express');
const app = express();
const PORT = 3000;
const routes = require('./routes');

routes.listen(PORT, () => {
  console.log('Server running on port 3000');
});



