const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/api/hello', (req, res) => {
    console.log(req.query);
    const name = req.query.name || 'Guest';
    res.json({
        message: `Hello ${name}!`,
    });
});

const mentors = [
    {name: 'István', age: 30},
    {name: 'Bence', age: 20},
    {name: 'Balazska', age: 27},
];

const listmentors = (req, res) => {
    //read datas from database
    //console.log(req);
    res.json(mentors);
}

app.get('/api/mentors', listmentors);

app.get('/api/mentors/:mentorID', (req, res) => {
    const mentor = mentors[req.params.mentorID - 1];
    if (mentor === undefined) {
        res.status(404);
        res.json({
            message: 'no mentor',
        }); 
        } else {
            res.json(mentor);
        }
    });
    


app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`);
});