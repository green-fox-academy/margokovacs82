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


app.get('/doubling', (req, res) => {
    const input = req.query.input;
    console.log(input);
    if (input === undefined) {
        res.json({
            error: 'Please provide an input!'
        })
    } else {
        res.json ({
            "received": input,
            "result": input * 2, 
        })
    }
});

app.get('/greeter', (req, res) => {
    const name = req.query.name;
    const title = req.query.title;
    if (name === undefined) {
        res.json({
            error: 'Please provide a name!'
        })
    }
    else if (title === undefined) {  
        res.json({
            error: 'Please provide a title!'
        })
    } else {
        res.json ({
            //name=Petike&title=student
            "welcome_message": `Oh, hi there ${name}, my dear ${title}!`
        })
    }
});


app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`);
});