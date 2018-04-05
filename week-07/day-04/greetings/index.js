const express = require('express');
const app = express();
const PORT = 3000;
// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let name = req.query.name || 'Guest';
  res.render('greetings', {
   string: `${name}`,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});