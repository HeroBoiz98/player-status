const express = require('express');
const app = express();

// Store the playing status
let player1Playing = false;
let player2Playing = false;

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Endpoint for player 1 playing
app.get('/player1', (req, res) => {
    player1Playing = true;
    player2Playing = false;
    res.send('Player 1 playing');
});

// Endpoint for player 2 playing
app.get('/player2', (req, res) => {
    player1Playing = false;
    player2Playing = true;
    res.send('Player 2 playing');
});

// Endpoint to reset the status
app.get('/reset', (req, res) => {
    player1Playing = false;
    player2Playing = false;
    res.send('No one playing');
});

// Endpoint to check who is playing
app.get('/status', (req, res) => {
    let status = '';
    if (player1Playing) {
        status = 'Player 1 playing';
    } else if (player2Playing) {
        status = 'Player 2 playing';
    } else {
        status = 'No one playing';
    }
    res.send(status);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
