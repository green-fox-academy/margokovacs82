const express = require('express');
const app = express();
const PORT = 3000;
// set the view engine to ejs
app.set('view engine', 'ejs');

const todos = [
  'get up',
  'survive',
  'go back to bed',
];

app.get('/', (req, res) => {
  res.render('todolist', {
   string: `Things to do today:`, 
   todos,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});