const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

// Store the current values for income, savings, and expenditure
let income = 0;
let savings = 0;
let expenditure = 0;

// API to get the current status
app.get('/data', (req, res) => {
    res.json({ income, savings, expenditure });
});

// API to update the data
app.post('/update', (req, res) => {
    const { type, value } = req.body;
    if (type === 'income') income += value;
    if (type === 'savings') savings += value;
    if (type === 'expenditure') expenditure += value;
    res.status(200).send('Data updated');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
