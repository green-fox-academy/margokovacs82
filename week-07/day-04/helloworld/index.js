const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
  // render `home.ejs`
  
res.render('home', {
    title: 'Hello World',
    img: 'https://vignette.wikia.nocookie.net/familyguy/images/5/5d/FGuy_Peter_Gen2012_R3Flat.jpg/revision/latest?cb=20120905121900',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});