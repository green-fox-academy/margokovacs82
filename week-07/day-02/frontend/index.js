const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
const bodyParser = require('body-parser');

app.use('/assets', express.static('assets'));
app.use(bodyParser.json());

app.post('/api/endpoint', (req, res) => {
    console.log(req.body.attr1);
    res.json({
        message: 'ok',
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});


app.get('/doubling/:input', (req, res) => {
    const input = req.params.input;
    console.log(input);
    if (input === undefined) {
        req.statusCode(404);
        res.json({
            error:'provide input!'
        })
    } else {
        res.json ({
            "received": input,
            "result": input * 2, 
        })
    }
});


app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`);
});